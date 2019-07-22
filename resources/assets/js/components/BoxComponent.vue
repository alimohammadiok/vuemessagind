<template>
    <div class="container">
        <div class="row">
            <button v-on:click="addFirstDiv" class="btn btn-success margin">Ekle +</button>
            <div class="firstDiv" v-for="item in firstDivs">
                <button v-on:click="addChild(item.id)" class="btn btn-primary margin">Ekle +</button>
                {{item.name}}
                <div class="secondDiv" v-for="element in item.childs">
                    <button v-on:click="addGrandChild(item.id,element.id)" class="btn btn-warning margin">Ekle +</button>
                    {{element.id}}
                    <div class="thirdDiv" v-for="atom in element.grandChilds">
                        {{atom.id}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            
            return {
                counter: 0,
                childCounter:0,
                grandCounter:0,
                firstDivs:
                [
                  
                ]
            }
        },

        methods:
        {
           
            addFirstDiv()
            {
                
                this.firstDivs.
                push({id:this.counter++, name: 'at',
                 boyut: 45, childs: []})
                console.log('firstdivfonk');
            },

            addChild(id)
            {
                this.firstDivs[id].childs.push({id:this.childCounter++, name:'child', grandChilds: []});
                console.log('firstdivfonk'+id+ this.firstDivs[id].name);
            },
            addGrandChild(id, grand_id)
            {
                this.firstDivs[id].childs[grand_id]
                .grandChilds.push({id:this.grandCounter++, name:'hi'});

            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
