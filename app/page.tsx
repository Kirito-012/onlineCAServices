import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import FAQSection from './components/FAQSection'
import CallToAction from './components/CallToAction'

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<WhyChooseUs />
			<FAQSection />
			<CallToAction />
			<Footer />
		</>
	)
}
