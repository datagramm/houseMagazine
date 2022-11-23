export class Model {
    constructor() {
        this.elementsAll = [
            {id:1, category: 'lampBed', text: 'Some text ', url: 'lamp1.png', filterKey: [], model: 'big',color: 'red'},
            {id:2, category: 'lampBed',  text: 'Some text ', url: 'lamp2.png', filterKey: [],model: 'big',color: 'blue'},
            {id:3, category: 'lampBed', text: 'Some text ', url: 'lamp3.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:4, category: 'lampBed', text: 'Some text ', url: 'lamp3.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:5, category: 'lampStreet',  text: 'Some text ', url: 'lamp1.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:6, category: 'lampStreet',  text: 'Some text ', url: 'lamp2.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:1, category: 'lampStreet',  text: 'Some text ', url: 'lamp3.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:2, category: 'lampKitchen',  text: 'Some text ',  url: 'lamp1.png', filterKey: [],model: 'small',color: 'blue'},
            {id:3, category: 'lampBedOne', text: 'Some text ',  url: 'lamp2.png', filterKey: [],model: 'small',color: 'blue'},
            {id:4, category: 'lampBedOne', text: 'Some text ',  url: 'lamp3.png', filterKey: [],model: 'small',color: 'blue'},
            {id:5, category: 'lampBedOne',  text: 'Some text ',  url: 'lamp2.png', filterKey: [],model: 'small',color: 'blue'},
            {id:6, category: 'lampBedOne',  text: 'Some text ',  url: 'lamp3.png', filterKey: [],model: 'small',color: 'blue'},
            {id:3, category: 'bed', text: 'Some text ',  url: 'bed1.png', filterKey: [],model: 'big',color: 'blue'},
            {id:4, category: 'bed', text: 'Some text ',  url: 'bed2.png', filterKey: [],model: 'big',color: 'blue'},
            {id:5, category: 'bed',  text: 'Some text ',  url: 'bed1.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:6, category: 'bed',  text: 'Some text ',  url: 'bed2.png', filterKey: [],model: 'small',color: 'blue'},


        ];
        this.elementsFiltered = [
            {id:1, category: 'lampBed', text: 'Some text ', url: 'lamp1.png', filterKey: [], model: 'big', color: 'red'},
            {id:2, category: 'lampBed',  text: 'Some text ', url: 'lamp2.png', filterKey: [],model: 'big',color: 'blue'},
            {id:3, category: 'lampBed', text: 'Some text ', url: 'lamp3.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:4, category: 'lampBed', text: 'Some text ', url: 'lamp3.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:5, category: 'lampStreet',  text: 'Some text ', url: 'lamp1.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:6, category: 'lampStreet',  text: 'Some text ', url: 'lamp2.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:1, category: 'lampStreet',  text: 'Some text ', url: 'lamp3.png', filterKey: [],model: 'middle',color: 'blue'},
            {id:2, category: 'lampKitchen',  text: 'Some text ',  url: 'lamp1.png', filterKey: [],model: 'small',color: 'blue'},
            {id:3, category: 'lampBedOne', text: 'Some text ',  url: 'lamp2.png', filterKey: [],model: 'small',color: 'blue'},
            {id:4, category: 'lampBedOne', text: 'Some text ',  url: 'lamp3.png', filterKey: [],model: 'small',color: 'blue'},
            {id:5, category: 'lampBedOne',  text: 'Some text ',  url: 'lamp2.png', filterKey: [],model: 'small',color: 'blue'},
            {id:6, category: 'lampBedOne',  text: 'Some text ',  url: 'lamp3.png', filterKey: [],model: 'small',color: 'blue'},

        ];

        this.leftButtons = [
            {id: 1, category: 'lamp', url:'icon2.png'},
            {id: 2,category: 'bed', url: 'icon1.png'},
            {id: 3, category: 'bed', url:'icon1.png'},
            {id: 4, category: 'lamp', url: 'icon2.png'},
            {id: 5, category: 'bed', url:'icon1.png'},
            {id: 6, category: 'lamp', url: 'icon2.png'},
        ];
        this.rightButtons = [
            {id: 1, category: 'lampbig', model: 'big',  url:'icon2.png'},
            {id: 2,category: 'bedbig', model: 'big',url: 'icon1.png'},
            {id: 3,category: 'bedsmall',model: 'small', url:'icon1.png'},
            {id: 4, category: 'lampsred', model: 'red', url: 'icon2.png'},
            {id: 5,category: 'bedmiddle',  model: 'middle', url:'icon1.png'},
            {id: 8, category: 'lampmiddle', model: 'blue',url: 'icon2.png'},
            {id: 9, category: 'lampsmall', model: 'small',url: 'icon2.png'},



        ];
        this.filteredRightButton = [
            {id: 1, category: 'lampBed', model: 'big', url:'icon2.png'},
            {id: 4, category: 'lampSmall', model:'middle', url: 'icon2.png'},
            {id: 8, category: 'lampStreet', model: 'small' , url: 'icon2.png'},
        ];
        this.filteredData = [];
        this.rightItemsResult = [];
    }

   bindDisplayRightMenu(callback){
        this.onDisplayRightMenu = callback;
   }
   bindDisplayElem(callback){
        this.onDisplayElem = callback;
   }
   bindDisplayCurrentItem(callback) {
        this.onDisplayCurrentItem = callback;
   }

    _commit(rightButtonsFiltered, elementsFiltered){
        this.onDisplayRightMenu(rightButtonsFiltered);
        this.onDisplayElem(elementsFiltered);
        this.onDisplayCurrentItem(elementsFiltered);

    }

    getFilteringRightButton(category) {
        this.filteredRightButton =   this.rightButtons.filter(item => item.category.includes(category));
        this.elementsFiltered =  this.elementsAll.filter(item => item.category.includes(category));
       this._commit(this.filteredRightButton, this.elementsFiltered );
        this.rightItemsResult = [];
    }

     async queryFilterItem(category){
            this.rightItemsResult = [];
            let indexMain;
        await this.filteredRightButton.forEach(item =>{
            this.elementsFiltered.forEach(itemFilter =>{
                itemFilter.filterKey.splice(itemFilter.filterKey.indexOf(item.model))

            });
            if (item.category.includes(category)){
                if (!(this.filteredData.includes(item.model))){
                    this.filteredData.push(item.model);

                } else {

                   indexMain = this.filteredData.indexOf(item.model);
                   this.filteredData.splice(indexMain, 1);

                }

            }
        });



      await this.filteredData.forEach( item2 => {
            let index;
            this.elementsFiltered.forEach(item =>{
                if (Object.values(item).includes(item2)){
                    index = Object.values(item).indexOf(item2);
                }
            });
            this.elementsFiltered.forEach(item3 =>{
                if (!(item3.filterKey.includes(Object.values(item3)[index])))
                    item3.filterKey.push(Object.values(item3)[index])
            })

        });


       await this.elementsFiltered.forEach(item =>{
                console.log(item.filterKey);
            if (item.filterKey.every(filterItem => this.filteredData.includes(filterItem))){
                this.rightItemsResult.push(item)
            }
        });

             await  this.onDisplayElem(this.rightItemsResult);
               await this.onDisplayCurrentItem(this.rightItemsResult);

            console.log(this.filteredData);
            console.log(this.rightItemsResult);
    }
     skipFilteredData(){
        this.filteredData = [];
     }


}