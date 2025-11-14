import React from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { Footer } from '../../components/footer/Footer';
import iconChat from '../../assets/img/icon-chat.webp';
import iconMoney from '../../assets/img/icon-money.webp';
import iconSecurity from '../../assets/img/icon-security.webp';
import { Feature } from '../../components/feature/Feature';


const Home: React.FC = () => {
    const FeatureData = [
        {
            icon: iconChat,
            alt: "Chat Icon",
            title: "You are our #1 priority",
            description:
                "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        },
        {
            icon: iconMoney,
            alt: "Money Icon",
            title: "More savings means higher rates",
            description:
                "The more you save with us, the higher your interest rate will be!",
        },
        {
            icon: iconSecurity,
            alt: "Security Icon",
            title: "Security you can trust",
            description:
                "We use top of the line encryption to make sure your data and money is always safe.",
        },
    ];

    return (
        <>
            <Navigation />
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">
                            Open a savings account with Argent Bank today!
                        </p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {FeatureData.map((feature) => (
                        <Feature
                            key={feature.title}
                            icon={feature.icon}
                            alt={feature.alt}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;