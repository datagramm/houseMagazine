export class Controller {
constructor(model, view) {
    this.model = model;
    this.view = view;

    this.animationLeftDiv();
    this.textAnim();
    this.onDisplayElements(this.model.elementsFiltered);
    this.onSliderMove(this.model.elementsFiltered);
    this.onGetButtonLeftMenu(this.model.leftButtons);
    this.onGetButtonRightMenu(this.model.filteredRightButton);
    this.onRightButtonsSelect();
    this.onRightButtonEffect();
    this.onDisplayCurrentItem(this.model.elementsFiltered);

    this.view.bindGetFilteringRightButton(this.handleGetFilteringRightButton);
    this.model.bindDisplayRightMenu(this.onGetButtonRightMenu);
    this.model.bindDisplayElem(this.onDisplayElements);
    this.model.bindDisplayCurrentItem(this.onDisplayCurrentItem);

    this.view.leftButtonSelect(this.handleOnLeftButtonSelect);
    this.view.bindRightButtonFilterSelect(this.handleRightButtonFilterSelect);
}
    animationLeftDiv = () =>{
    this.view.animationLeftDiv();
    };
    textAnim = () => {
    this.view.textAnim();
    };
    onDisplayElements = elements => {
    this.view.displayElem(elements)
    };
    onSliderMove = elements => {
        this.view.sliderMove(elements);
    };
    onGetButtonLeftMenu = buttons => {
        this.view.getButtonsLeftMenu(buttons);
    };
    handleOnLeftButtonSelect = () => {
        this.model.skipFilteredData();
    };
    onGetButtonRightMenu = (buttons) => {
        this.view.getButtonsRightMenu(buttons);
    };
    onRightButtonsSelect = () => {
        this.view.rightButtonsSelect();
    };
    onRightButtonEffect = () =>{
        this.view.rightButtonsEffect();
    };
    handleGetFilteringRightButton =  category => {
      this.model.getFilteringRightButton(category);
    };
    handleRightButtonFilterSelect = async (selectedFilter) => {
        await this.model.queryFilterItem(selectedFilter);
    };
    onDisplayCurrentItem = elements => {

        this.view.displayCurrentItem(elements)
    }


}