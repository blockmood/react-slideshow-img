# react-slideshow-img

## 使用

```
npm install react-addons-css-transition-group react-slideshow-img -S
```

```
const list = [img1,img2]
...
<SlideShow>
  {
    list.map(item => 
      <a href={item.link} key={item.id}><img src={item.image} alt=""/></a>
      )
  }
</SlideShow>
```


## 使用参数

| 参数 | 说明 | 默认值 |
| ------ | ------ | ------ |
| speed | 播放速度 | 3000 |
| pagination | 小圆点 | false |
| navigation | 左右按钮 | false |
| pagClick | 按钮点击 | true |
