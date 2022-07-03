// データ読み込み部分

const commonFunctions = {
    loadJson: async function() {
        const response = await axios.get('./js/data.json');
        return response.data;
    },

    createList: function(viewList, dataList) {
        for(item of dataList) {
            viewList.push(item);
        }
    }
}

const jsonData = commonFunctions.loadJson();

const profile = Vue.createApp({
    data() {
        return {
            items:[]
        }
    },
    computed: {
        async createList() {
            jsonData.then((res) => commonFunctions.createList(this.items, res.profile))   
        } 
    }
}).mount('.profile-table')
.createList


const career = Vue.createApp({
    data() {
        return {
            items:[]
        }
    },
    computed: {
        async createList() {
            jsonData.then((res) => commonFunctions.createList(this.items, res.career))   
        } 
    }
}).mount('.career-content')
.createList


const technique = Vue.createApp({
    data() {
        return {
            categories:[]
        }
    },
    computed: {
        async createList() {
            jsonData.then((res) => commonFunctions.createList(this.categories, res.technique))   
        } 
    }
}).mount('.tech-content')
.createList


const certification = Vue.createApp({
    data() {
        return {
            items:[]
        }
    },
    computed: {
        async createList() {
            jsonData.then((res) => commonFunctions.createList(this.items, res.certification))   
        } 
    }
}).mount('#certification-list')
.createList


const account = Vue.createApp({
    data() {
        return {
            items:[]
        }
    },
    computed: {
        async createList() {
            jsonData.then((res) => commonFunctions.createList(this.items, res.account))   
        } 
    }
}).mount('#account-list')
.createList


const research = Vue.createApp({
    data() {
        return {
            categories:[]
        }
    },
    computed: {
        async createList() {
            jsonData.then((res) => commonFunctions.createList(this.categories, res.research))   
        } 
    }
}).mount('#research-acd-contents')
.createList
