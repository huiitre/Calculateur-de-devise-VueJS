<template>
  <div class="converter">
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
  <ReturnLink />
</template>

<script>
import BaseAmount from "./BaseAmount.vue";
import Toggler from "./Toggler.vue";
import Currencies from "./Currencies.vue";
import ConvertedAmount from "./ConvertedAmount.vue";
import ReturnLink from "@/modules/common/components/ReturnLink.vue";
import findCurrencyByName from '@/modules/Converter/utils/findCurrencyByName'
import currencies from '@/data/currencies.js'
import roundDecimal from '@/modules/Converter/utils/roundDecimal'

export default {
  name: "Converter-component",
  components: {
    BaseAmount,
    Toggler,
    Currencies,
    ConvertedAmount,
    ReturnLink,
  },
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
	created() {
    this.currencies = this.getFilteredCurrencies()
  },
	methods: {
		setCurrentCurrency: function(string) {
      const currency = findCurrencyByName(this.currencies, string);
      this.currentCurrency.name = currency.name;
      this.currentCurrency.rate = currency.rate;
    },
		setAmount: function(amount) {
			this.amount = amount
			console.log('this.amount : ', this.amount);
		},
		handleChangeOpen: function() {
			this.open = !this.open
			// if (this.open == false)
				// this.resetState();
		},
		setSearch: function(search) {
			console.log('search : ', search);
			this.search = search
			this.currencies = this.getFilteredCurrencies()
		},
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
	computed: {
		getResult: function() {
			return this.result = roundDecimal(this.amount*this.currentCurrency.rate);
		}
	},
	watch: {
		search: function() {
			console.log('ça change');
		}
	}
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
  max-width: 300px;
  margin: var(--gutter) auto;
  text-align: center;
}
</style>
