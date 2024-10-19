import Appli from "../../components/appli/Appli"
import Companies from "../../components/Companies/Companies"
import Hero from "../../components/Hero"
import Apple from '../../assets/apple-logo-svgrepo-com.svg'
import  Android from '../../assets/android-logo-svgrepo-com.svg'
import Figma from '../../assets/figma-svgrepo-com.svg'
import Chrome from '../../assets/chrome-svgrepo-com.svg'
import Adobe from '../../assets/adobe-svgrepo-com.svg'
import './Home.css'
function Home (){
    return(
        <div>
            <Hero />
            <div className="appcontain">
            <Appli image={Apple} text='iOS App' note='Create, browse and save palettes on the go.'/>
            <Appli image={Android} text='Android App' note='Thousands of palettes in your pocket.' />
            <Appli image={Figma} text='Figma Plugin' note="All palettes right in your worksapce."/>
            <Appli image={Chrome} text='Chrome Extension' note='Get and edit a palette every new tab.' />
            <Appli image={Adobe}  text='Adobe Extension' note='Use Coolors with your favorite tools.'/>
            </div>
            <Companies />

        </div>
    )
}
export default Home