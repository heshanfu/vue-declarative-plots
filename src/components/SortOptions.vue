<template>
    <div>
        Sort <em>{{ getScale(variable).name }}</em> by <em>{{ getData(by.data).name }}</em> data
        <span>
            on
            <select v-model="selectedKey">
                <option disabled value="">Please select one</option>
                <option v-for="sortVarKey in by.variables" :key="sortVarKey" :value="sortVarKey">
                    {{ sortVarKey }}
                </option>
            </select>
        </span>

        <span v-if="validSelection(selectedKey)">
            <select v-model="sortAscending">
                <option :value="true">Ascending</option>
                <option :value="false">Descending</option>
            </select>
        </span>
        
    </div>
</template>

<script>
import SortBy from './../sort/SortBy.js';

let uuid = 0;
export default {
    name: 'SortOptions',
    props: {
        'variable': {
            type: String
        },
        'by': {
            type: Object 
        },
        'getScale': {
            type: Function
        },
        'getData': {
            type: Function
        }
    },
    data() {
        return {
            selectedKey: null,
            sortAscending: true
        }
    },
    watch: {
        selectedKey: function() {
            this.go();
        },
        sortAscending: function() {
            this.go();
        }
    },
    created() {
        console.assert(this.by instanceof SortBy);
        // TODO: Make assertions about scale types?
    },
    methods: {
        validSelection(varValue) {
            return (varValue !== null);
        },
        go() {
            if(this.validSelection(this.selectedKey)) {
                this.getScale(this.variable).sort(this.getData(this.by.data), this.selectedKey, this.sortAscending);
            }
        }
    }
}
</script>

<style>


</style>