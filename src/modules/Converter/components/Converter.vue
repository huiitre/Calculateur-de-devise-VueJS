//* v-bind:property ou :property signifie qu'on vient insérer une prop dynamique

//* Pour l'exemple avec Currencies :
//* Même principe qu'avec React, on insère une fonction "setSearch" afin de venir modifier notre state "search" en fonction de ce que l'utilisateur a renseigné
//* En React : const [search, setSearch] = useState(valeurParDefaut);

//* v-if="open" veut dire que le composant sera présent uniquement si "open" vaut true, tout simplement
//* équivalant avec React :  { open && <Currencies /> }

<template>
  <div class="converter" :class="{ 'converted--open': open }">
    <BaseAmount v-bind:setAmount="setAmount" />
    <Toggler v-bind:handleChangeOpen="handleChangeOpen" :open="open" />
    <Currencies
			v-if="open"
			v-bind:setCurrentCurrency="setCurrentCurrency"
			:currencies="currencies"
			:setSearch="setSearch"
		/>
    <ConvertedAmount v-bind:result="getResult" :currency="currentCurrency.name" />
  </div>
</template>

<script>
//* imports compoants
import BaseAmount from "./BaseAmount.vue";
import Toggler from "./Toggler.vue";
import Currencies from "./Currencies.vue";
import ConvertedAmount from "./ConvertedAmount.vue";

//* imports utils
import findCurrencyByName from '@/modules/Converter/utils/findCurrencyByName'
import roundDecimal from '@/modules/Converter/utils/roundDecimal'

//* imports data (en attendant l'API)
import currencies from '@/data/currencies.js'

//* export
export default {
  name: "Converter-component",
  components: {
    BaseAmount,
    Toggler,
    Currencies,
    ConvertedAmount,
  },
	//* notre state déclaré dans une fonction data() (natif à vue)
	data() {
		return {
			currencies: [],
			search: '',
      currentCurrency: {
        name: '',
        rate: 0,
      },
			amount: 0,
			result: 0,
			open: false
		}
	},
	//* à l'initialisation du composant
	created() {
    this.currencies = this.getFilteredCurrencies()
  },
	//* les méthodes qui seront relues à chaque rendu (relues mais non exécutés)
	methods: {
		setCurrentCurrency: function(string) {
      const currency = findCurrencyByName(this.currencies, string);
      this.currentCurrency.name = currency.name;
      this.currentCurrency.rate = currency.rate;
    },
		setAmount: function(amount) {
			this.amount = amount
		},
		handleChangeOpen: function() {
			this.open = !this.open
			// if (this.open == false)
				// this.resetState();
		},
		setSearch: function(search) {
			this.search = search
			this.currencies = this.getFilteredCurrencies()
		},
		/* //! Déprécié */
		/* resetState: function() {
			this.currentCurrency.name = '';
			this.currentCurrency.rate = 0;
			this.amount = 0;
			this.result = 0;
		}, */
		getFilteredCurrencies: function() {
			const loweredSearch = this.search.toLowerCase();
			return currencies.filter(
				(currency) => currency.name.toLowerCase().includes(loweredSearch),
			);
		}
	},
	//* Différence avec methods:, watch: et autres ...
	//* https://fr.vuejs.org/v2/guide/computed.html
	computed: {
		getResult: function() {
			return this.result = roundDecimal(this.amount*this.currentCurrency.rate);
		}
	},
	//* des tests divers ...
	/* watch: {
		search: function() {
			console.log('ça change');
		}
	} */
	/* updated() {
		console.log('updated');
	}, */
	/* updated() {
		console.log('name : ', this.currentCurrency.name);
		console.log('rate : ', this.currentCurrency.rate);
	},
	beforeMount() {
		console.log('before mount name : ', this.currentCurrency.name);
	},
	mounted() {
		console.log('mounted name : ', this.currentCurrency.name);
	},
	beforeUpdate() {
		console.log('before update name : ', this.currentCurrency.name);
	},
	beforeUnmount () {
		console.log('before unmount name : ', this.currentCurrency.name);
	},
	unmounted () {
		console.log('unmounted name : ', this.currentCurrency.name);
	},
	watch: {
		handler() {
			console.log('watch name : ', this.currentCurrency.name);
		}
	} */
};
</script>

<style scoped>
.converter {
	margin: 0;
}
@media screen and (min-width: 500px) {
	.converter {
  max-width: 300px;
  margin: var(--gutter) auto;
  text-align: center;
}
}

</style>
