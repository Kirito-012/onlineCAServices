import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import FAQSection from './components/FAQSection'
import CallToAction from './components/CallToAction'
import StepsSection from './components/StepsSection'

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<WhyChooseUs />
			<StepsSection />	
			<FAQSection />
			<CallToAction />
			<Footer />
		</>
	)
}
