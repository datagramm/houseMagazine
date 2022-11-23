export class View {
    constructor() {
        this.mainDiv = this.createElement('div', 'main-div');
        this.leftMenu = this.createElement('div', 'left-div-menu');
        this.leftDiv = this.createElement('div', 'left-div');
        this.currentItem = this.createElement('div', 'current-item');

        this.rigthMenu = this.createElement('div', 'right-menu');

        this.psevdoLeftDiv = this.createElement('div', 'psevdo-left-div');
        this.psevdoLeftDiv.append(this.leftDiv);
        this.psevdoRightDiv = this.createElement('div', 'psevdo-right-div');

        this.prevButton = this.createElement('div', 'prev-button');
        this.iconPrev = this.createElement('div', 'icon-prev')
        this.prevButton.append(this.iconPrev);
        this.nextButton = this.createElement('div', 'next-button');
        this.iconNext = this.createElement('div', 'icon-next');
        this.nextButton.append(this.iconNext);

        this.sliderBar = this.createElement('div', 'slider');
        this.sliderLine = this.createElement('div', 'slider-line');

        this.sliderBar.append(this.sliderLine);

        this.dot1 = this.createElement('div', 'dot1');
        this.dot2 = this.createElement('div', 'dot2');
        this.dot3 = this.createElement('div', 'dot3');

        this.h2 = this.createElement('h1', 'h2-div');
        this.h2Right = this.createElement('h1', 'h2-div');
        this.h2.textContent = ' lightup'
        this.leftDiv.append(this.leftMenu,this.h2, this.dot1, this.dot2, this.dot3);
        this.rightDiv = this.createElement('div', 'right-div');
        this.psevdoRightDiv.append(this.rightDiv)
        this.h2Right.textContent = '';
        this.rightDiv.append(this.rigthMenu)
        this.root = this.getElement('#root');
        this.mainDiv.append(this.psevdoLeftDiv, this.psevdoRightDiv, this.sliderBar, this.prevButton, this.nextButton);
        this.root.append(this.mainDiv, this.currentItem);
        this.offset = 0;
        this.sliderBreak = 0;
    }

    createElement(tag, className){
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }
    getElement(selector){
        const element = document.querySelector(selector);
        return element;

    }
    animationLeftDiv(){


        this.prevButton.style.transform = 'scale(1)';
        this.nextButton.style.transform = ' scale(1)';
        this.sliderBar.style.left = '20%'
        setTimeout(() =>{
            const leftButtons = document.querySelectorAll('.left-menu-button');
            leftButtons.forEach((button)=>{
                button.style.transition = '1.5s'
                button.style.transform = 'scale(0)'
                button.style.opacity = '0%';

            })

            this.prevButton.style.transform = 'scale(0)';
            this.nextButton.style.transform = ' scale(0)';
            this.sliderBar.style.left = '100%'
        },400)
        setTimeout(()=>{
            this.psevdoRightDiv.style.width = '0%';

        },500);
        setTimeout(() => {
            this.psevdoRightDiv.style.width = '28%';

        },2000)
        setTimeout(()=>{

            this.dot1.style.transform = 'scale(1)';
            this.dot2.style.transform = 'scale(1) rotateZ(-45deg)';
            this.dot3.style.transform = 'scale(1) rotateZ(45deg)';
        },3500)
        setTimeout(() =>{
            this.prevButton.style.transform = 'scale(1)';
            this.nextButton.style.transform = ' scale(1)';
            this.prevButton.style.transition = '1s';
                this.nextButton.style.transition = '1s';
            this.sliderBar.style.transition = '1s';
            this.sliderBar.style.left = '20%';
            this.currentItem.style.top = '10%';
        },3500)
        setTimeout(() =>{
            document.querySelector('.moving-button').style.transform = 'scale(0.9)'
            const buttons = document.querySelectorAll('.left-menu-button')
            buttons.forEach((button)=>{
                button.style.transform = 'scale(0.9)';
                button.style.opacity = '100%'
                button.style.transition = '1.5s'

            })

        },1000)


    }
    textAnim(){
        setTimeout(()=>{
        async function* generateSequence(start, end) {

            for (let i = start; i <= end; i++) {


                await new Promise(resolve => setTimeout(resolve, 5));

                yield i;
            }

        }

        (async () => {

            let generator = generateSequence(-100, 1000);
            for await (let value of generator) {
                this.h2.style =`   font-size: 20vh;
                margin:0;
                padding:0;
    font-weight: bold;
    font-style: italic;
    color: white; /* fallback */
    background: -webkit-linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,0), transparent ${value}%);
    background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0), transparent ${value}%);
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;`
            }

        })();
    },500)

    }
    currentElementAnimLeft(){

        this.currentItem.style.transition = '0.3s';
        this.currentItem.style.top = '-80%';
        this.currentItem.style.left = '-5%';
        setTimeout(() => {
            this.currentItem.style.transition = '0.3s';
            this.currentItem.style.top = '-80%';
            this.currentItem.style.left = '100%';
        },100);
        setTimeout(() => {
            this.currentItem.style.transition = '0.3s';
            this.currentItem.style.top = '10%';
            this.currentItem.style.left = '25%';
        },200)

    }
    currentElementAnimRight(){
        this.currentItem.style.transition = '0.3s';
        this.currentItem.style.top = '-80%';
        this.currentItem.style.left = '50%';
        setTimeout(() => {
            this.currentItem.style.transition = '0.3s';
            this.currentItem.style.top = '-80%';
            this.currentItem.style.left = '-50%';
        },100);
        setTimeout(() => {
            this.currentItem.style.transition = '0.3s';
            this.currentItem.style.top = '10%';
            this.currentItem.style.left = '25%';
        },200)

    }
    displayElem(elements){
        while (this.sliderLine.firstChild){
            this.sliderLine.removeChild(this.sliderLine.firstChild)
        }

        if(elements.length !== 0){
            elements.forEach(elem => {
                const element = this.createElement('div', 'slider-element');
                const elementText = this.createElement('div', 'slider-element-text');
                element.style.backgroundImage = `url('./${elem.url}')`;
                elementText.textContent = elem.text;
                element.append(elementText);
                this.sliderLine.append(element);

            })
        }


    }

    displayCurrentItem(elements){

        const disp = () => {
            while(this.currentItem.firstChild) {
                this.currentItem.removeChild(this.currentItem.firstChild);
            }
            if (elements.length !== 0) {
                const element = this.createElement('div', 'current-item-child');
                element.style.backgroundImage = `url('./${elements?.[this.sliderBreak]?.url}')`;
                this.currentItem.append(element);
            }
        };
        disp();

        const display = () =>{ setTimeout(() =>{ disp() },200)};

        document.querySelector('.prev-button').addEventListener('click', () => {
            this.currentElementAnimLeft();
            display();


        });

        document.querySelector('.next-button').addEventListener('click', () => {
            this.currentElementAnimRight();
            display();
        })

    }



    getButtonsLeftMenu(buttons){
        const movingButton = this.createElement('div', 'moving-button');

        buttons.forEach(button =>{
            const buttonMenu = this.createElement('div', 'left-menu-button');
            buttonMenu.id = `${button.category + button.id}`;
            buttonMenu.style.backgroundImage =   `url('./${button.url}')`;
            buttonMenu.style.transform = 'scale(0.9)';
            buttonMenu.style.opacity = '100%';
            buttonMenu.style.transition = '1.5s';
            this.leftMenu.append(movingButton, buttonMenu);

        })

    }
    getButtonsRightMenu(buttons){
        while (this.rigthMenu.firstChild){
            this.rigthMenu.removeChild(this.rigthMenu.firstChild)
        }
        if (buttons.length !== 0) {
            buttons.forEach(button => {
                const buttonMenu = this.createElement('div', 'right-menu-button');
                buttonMenu.id = `${button.category}`;
                buttonMenu.style.backgroundImage = `url('./${button.url}')`;

                this.rigthMenu.append(buttonMenu);

            })
        }

    }
    sliderDown(){
        this.sliderBreak = 0;
        this.offset = 0;
        this.sliderLine.style.right = '0';
    }
    sliderMove(elements){

        this.sliderLine.style.transition = '0.5s';
        document.querySelector('.prev-button').addEventListener('click', () =>{
            console.log(elements)

        let width = ($('.slider-element').width() / $('.slider-element').parent().width() * 100) + 10;
        this.offset += width;
        this.sliderLine.style.right = this.offset + '%';
            this.sliderBreak += 1;
            console.log(this.sliderBreak)
            if (this.sliderBreak >= document.querySelectorAll('.slider-element').length){
                this.sliderBreak = 0;
                this.sliderLine.style.right = '0';
                this.offset = 0;
            }

        });

        document.querySelector('.next-button').addEventListener('click', () =>{

            let width = ($('.slider-element').width() / $('.slider-element').parent().width() * 100) + 10;
            this.offset -= width;
            this.sliderLine.style.right = this.offset + '%';
            this.sliderBreak -= 1;
            if (this.sliderBreak <= 0){
                this.sliderBreak = 0;
                this.sliderLine.style.right = '0';
                this.offset = 0;
            }

        })
    }
    leftButtonSelect(handler){


        const buttons = document.querySelectorAll('.left-menu-button')

           buttons.forEach((button) => {


               button.addEventListener('click', () =>{
                   handler();
                   const buttonSlide  = document.querySelector('.moving-button');
                   buttonSlide.style.transform = `translateY(${9 * (button.id.slice(-1) - 1)}vh) scale(0.9)`;

               });

           })

    }

    async bindRightButtonFilterSelect(handler){
        this.rigthMenu.addEventListener('click', async event =>{
            if(event.target.className === 'right-menu-button'){
               const selectedFilter = await event.target.id;
                handler(selectedFilter);
            }
        })
    }

    rightButtonsSelect(){

        let buttons = document.querySelectorAll('.right-menu-button');
        buttons.forEach( button => {

            button.style.opacity = '0.5';
            button.addEventListener('click', () => {
                this.sliderBreak = 0;
                this.sliderLine.style.right = '0';
                this.offset = 0;
                if (button.style.opacity === '1'){
                    button.style.transition = '0.5s';
                    button.style.opacity = '0.5';
                }
                else {
                    button.style.transition = '0.5s';
                    button.style.opacity = '1';
                }
            })
        })
    }
    rightButtonsEffect(){

        setTimeout(() => {
            let buttons = document.querySelectorAll('.right-menu-button');
            buttons.forEach(button =>{
                button.style.opacity = '0';
                button.style.transform = 'scale(0)'
            })
        },500)
        setTimeout(() => {
            let buttons = document.querySelectorAll('.right-menu-button');
            buttons.forEach(button =>{
                button.style.opacity = '0.5';
                button.style.transform = 'scale(1)'
            })
        },2000)
        }
        bindGetFilteringRightButton(handler) {

             this.getElement('.left-div-menu').addEventListener('click', event => {
                 this.sliderDown();
            if (event.target.className === 'left-menu-button'){
               const category = event.target.id.slice(0, -1);
               console.log(category);
               handler(category);
               this.rightButtonsSelect();
            }

        })
        }

        



}