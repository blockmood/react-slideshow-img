# react-slideshow-img （react 轮播图组件）

### use

```
npm install react-slideshow-img
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
