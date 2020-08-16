// 渐隐渐现轮播图构造函数

class Banner{
    constructor(ele){
        //接收参数
        this.ele = ele;
        // 获取需要的标签对象
        this.oUl = ele.querySelector('ul');
        this.oOl = ele.querySelector('ol');
        this.oUllis = ele.querySelectorAll('ul li');
        this.oLeftRight = ele.querySelector('div');
        //设置参数变量
        /* 记录存储轮播图的次数 */
        this.index = 0;
        /* 定义存储定时器 */
        this.loopTime = 0;

    }

    //定义入口函数
    init(){
        this.setLi();
        this.setClick();
        this.autoLoop();
        this.overOut();
        this.setActive();
    }

    //生成焦点按钮
    /* 节点方法 */
    setLi(){
        //循环遍历ul中的li,获取ol的个数
        this.oUllis.forEach( (item,key)=>{
            //通过节点，创建标签
            const li = document.createElement('li');

            //给li添加属性
            li.setAttribute('name' , 'olli');
            //给li上设定属性索引
            li.setAttribute('index' , key);

            //key=0,是第一个li
            if( key==0 ){
                li.className = 'active';
            }
            //将创建的li,写入ol中
            this.oOl.appendChild(li);
        } )
    }

    /* 字符串方法 */
    /* setLi(){
        var str = '';
        this.oUllis.forEach( (item , key)=>{
            if( key === 0 ){
                str += `<li class="active" index="${key+1}"></li>` 
            }else{
                str += `<li index="${key+1}"></li>`
            }
        })
        this.oOl.innerHTML = str;
    } */

    //index执行++
    change(param){
        //当前轮播图显示透明
        this.oUllis[this.index].style.opacity = 0;

        // 向右++;向左--
        if(param == 'right'){
            this.index++;
        }
        if(param == 'left'){
            this.index--;
        }

        //判断index极限值
        if(this.index == -1){
            this.index = this.oUllis.length-1;
        }
        if(this.index == this.oUllis.length){
            this.index = 0;
        }

        //对应的轮播图显示
        this.oUllis[this.index].style.opacity = 1;

        this.setActive();
    }

    //左右切换和焦点按钮
    setClick(){
        //点击左按钮,index--,点击右按钮,index++
        this.ele.addEventListener('click' , (e)=>{
            if(e.target.getAttribute('name') == 'left'){
                this.change('left');
            }
            
            if(e.target.getAttribute('name') == 'right'){
                this.change('right');
            }
            
            // 点击焦点按钮
            if(e.target.getAttribute('name') == 'olli'){
                //获取当前标签属性值,也就是索引下标
                let ind = e.target.getAttribute('index');
                //让原来index对应的标签透明度0
                this.oUllis[this.index].style.opacity = 0;
                // 把点击后的索引值赋值给this.index
                this.index = ind;
                //让当前index对应的标签透明度1
                this.oUllis[this.index].style.opacity = 1;
            }
        
            this.setActive();
        })
    }

    //自动轮播
    autoLoop(){
        this.loopTime = setInterval( ()=>{
            this.change('right');
        } , 3000)
    }

    //鼠标移入移出
    overOut(){
        this.ele.addEventListener('mouseover' , ()=>{
            clearInterval(this.loopTime);
        })
        this.ele.addEventListener('mouseout' , ()=>{
            this.autoLoop();
        })
    }

    setActive(){
        //切换时，焦点改变样式
        /* 获取焦点按钮 */
        const oOllis = this.ele.querySelectorAll('ol li');
        oOllis.forEach( (item , key)=>{
            //清除所有样式
            item.className = '';
            //索引相同的，添加样式
            if( key == this.index ){
                item.className = 'active';
            }
        })
    }
        














}