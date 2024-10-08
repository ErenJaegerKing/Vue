import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGit from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGit; //先暂时使用默认图片
  // 处理图片
  // 该图片是否在视口范围内 获取整个网页内容区的高度
  const clientHeight = document.documentElement.clientHeight;
  // 返回元素的大小及其相对于视口的位置
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 100;
  if (rect.top >= -height && rect.top <= clientHeight) {
    // 在视口范围内
    const tempImg = new Image();
    tempImg.onload = function() {
      //当真实图片加载完成之后
      img.dom.src = img.src;
    };
    tempImg.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }
}

// 希望，调用该函数，就可以设置那些合适的照片
function setImages() {
  for (const img of imgs) {
    setImage(img);
  }
}

function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  //bind没有加到父元素里面去，inserted已经加到父元素里面了
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    //立即处理它
    setImage(img);
  },
  // 移除与el相对应的图像对象 元素消失的时间点开始运行
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
