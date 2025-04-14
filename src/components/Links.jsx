import React from "react";
import "../stylesheets/Links.css";

const Links = () => {
    const linkData = [
        {
            heading: "Categories",
            icon:"images/world.png",
            items: [
                "User Interface",
                "User Experience",
                "Digital Media",
                "Lifestyle",
                "Programming",
                "Animation",
            ],
        },
        {
            heading: "Products",
            icon:"images/cloud.png",
            items: [
                "Pricing",
                "Overview",
                "Browse",
                "Accessibility",
                "Five",
                "Changelog",
            ],
        },
        {
            heading: "Solutions",
            icon:"images/setting.png",
            items: [
                "Brainstorming",
                "Ideation",
                "Wireframing",
                "Research",
                "Design",
                "Concept",
            ],
        },
        {
            heading: "Resources",
            icon:"images/branch.png",
            items: [
                "Help Center",
                "Blog",
                "Tutorials",
                "FAQs",
                "Community",
                "Events",
            ],
        },
        {
            heading: "Supports",
            icon:"images/headset.png",
            items: [
                "Contact Us",
                "Developers",
                "Documentation",
                "Integrations",
                "Reports",
                "Webinar",
            ],
        },
        {
            heading: "Companies",
            icon:"images/codepen.png",
            items: ["About", "Press", "Events", "Careers", "Customers", "Partners"],
        },
    ];

    return (
        <div className="Links">
            {linkData.map(({ heading, icon, items }, index) => (
                <div key={index} className="Link-list">
                    <div className="link-heading">
                        <img src={icon} alt="" />
                        <h3>{heading}</h3>
                    </div>
                    {items.map((item, idx) => (
                        <div key={idx} className="list">
                            <a href="">{item}</a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Links;
