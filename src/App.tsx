import Layout from "@/components/Layout";
import {Intro} from "@/components/front/Intro";
import {About} from "@/components/front/About";
import {FinSystem} from "@/components/front/FinSystem";
import {Why} from "@/components/front/Why";
import {Suite} from "@/components/front/Suite";
import {News} from "@/components/front/News";
import {Contact} from "@/components/front/Contact";
import {frontPage as acf} from "@/data/content";

// Same section order as the source front page (the "Era" section is commented out there too).
const App = () => (
  <div style={{outline: "none"}} tabIndex={-1} id="gatsby-focus-wrapper">
    <Layout>
      <Intro data={acf.intro} about={acf.about}/>
      <About data={acf.about}/>
      <FinSystem data={acf.finsystem}/>
      <Why data={acf.why}/>
      <Suite data={acf.suite}/>
      <News data={acf.news}/>
      <Contact data={acf.contact}/>
    </Layout>
  </div>
);

export default App;
