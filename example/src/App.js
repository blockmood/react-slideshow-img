import React from 'react'
import SlideShow from '../../src/slideShow'

 class App extends React.Component{
    
     componentDidMount(){
         
     }
     render(){
         return (
             <SlideShow 
                speed={3000}
                pagination={true}
                navigation={true}
                pagClick={false}
             >
                 <a href=""><img src="http://cdn.ydma.cn/2018-11-03-Km03e16Y" alt=""/></a>
                 <a href=""><img src="http://cdn.ydma.cn/2018-08-21-SilFxmQF" alt=""/></a>
                 <a href=""><img src="http://cdn.ydma.cn/2018-11-04-42HoHlgA" alt=""/></a>
             </SlideShow>
         )
     }
 }

 export default App