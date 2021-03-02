import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useValues } from 'kea'
import { layoutLogic } from '../../logic/layoutLogic'

import NewsletterSignup from './NewsletterSignup'
import logo from '../../images/posthog-hog-transparent.svg'

interface FooterListItemProps {
    to?: string
    href?: string
    children: any
    border?: boolean
}

const FooterListItem = ({ to = '', border = true, href = '', children }: FooterListItemProps) => {
    const baseClasses = 'block py-3 text-white text-opacity-60 hover:text-opacity-100 hover:text-white'
    const classList = border ? `${baseClasses} border-b border-gray-600` : baseClasses

    return to ? (
        <Link to={to} className={classList}>
            {children}
        </Link>
    ) : (
        <a href={href} className={classList}>
            {children}
        </a>
    )
}

const FooterSubCategory = ({ children }: { children: any }) => (
    <header className="block gosha text-white mt-8 font-bold text-base">{children}</header>
)

const FooterCategory = ({ children, title }: { children: any; title: string }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div>
            <h5
                className="md:hidden cursor-pointer text-white text-lg border-b border-gray-600 py-2 my-2"
                onClick={() => setExpanded(!expanded)}
            >
                {title}

                <span className="float-right block text-2xl">{expanded ? '-' : '+'}</span>
            </h5>
            <h5 className="hidden md:block text-white text-lg">{title}</h5>
            <div className={expanded ? 'block' : 'hidden md:block'}>{children}</div>
        </div>
    )
}

export const Footer = ({
    isDocsPage,
    onPostPage,
    showNewsletter = false,
}: {
    isDocsPage: boolean
    onPostPage: boolean
    showNewsletter?: boolean
}) => {
    const newsletterSignup = showNewsletter ? <NewsletterSignup /> : null
    const { websiteTheme } = useValues(layoutLogic)
    const darkModeSupportedPage = isDocsPage || onPostPage
    const bgClass = darkModeSupportedPage && websiteTheme === 'dark' ? 'bg-darkmode-purple' : 'bg-footer'
    return (
        <div className={`${bgClass} site-footer py-24 relative`}>
            {newsletterSignup}
            <img src={logo} className="mx-auto block text-center" />
            <div className="w-11/12 max-w-5xl flex flex-col md:flex-row justify-between mx-auto mt-24">
                <div className="w-full md:w-1/4 md:pr-8">
                    <FooterCategory title="Product">
                        <FooterSubCategory>Overview</FooterSubCategory>
                        <FooterListItem to="/product-features" border={false}>
                            Product overview &amp; comparison
                        </FooterListItem>

                        <FooterSubCategory>Product suite</FooterSubCategory>
                        <FooterListItem to="/product-features/session-recording">Session replay</FooterListItem>
                        <FooterListItem to="/product-features/feature-flags" border={false}>
                            Feature Flags
                        </FooterListItem>

                        <FooterSubCategory>Features</FooterSubCategory>
                        <FooterListItem to="/product-features/event-autocapture">Auto capture</FooterListItem>
                        <FooterListItem to="/product-features/plugins">Plugins</FooterListItem>
                        <FooterListItem to="/product-features/self-hosted">Data portability</FooterListItem>
                        <FooterListItem to="/product-features/self-hosted" border={false}>
                            Private cloud deployment
                        </FooterListItem>
                    </FooterCategory>
                </div>
                <div className="w-full md:w-1/4 md:px-8">
                    <FooterCategory title="Community">
                        <FooterSubCategory>Code</FooterSubCategory>
                        <FooterListItem href="https://github.com/posthog/posthog">Source code</FooterListItem>
                        <FooterListItem href="https://github.com/posthog" border={false}>
                            All repositories
                        </FooterListItem>

                        <FooterSubCategory>Discussion</FooterSubCategory>
                        <FooterListItem href="https://posthog.com/slack">Slack</FooterListItem>
                        <FooterListItem href="https://github.com/PostHog/posthog/issues">Issues</FooterListItem>
                        <FooterListItem href="https://posthog.com/support">Support</FooterListItem>
                        <FooterListItem href="mailto:sales@posthog.com" border={false}>
                            Contact sales
                        </FooterListItem>

                        <FooterSubCategory>Get involved</FooterSubCategory>
                        <FooterListItem href="https://github.com/orgs/PostHog/projects/1">Roadmap</FooterListItem>
                        <FooterListItem href="https://github.com/PostHog/posthog/graphs/contributors">
                            Contributors
                        </FooterListItem>
                        <FooterListItem href="https://merch.posthog.com/collections/all" border={false}>
                            Merch
                        </FooterListItem>
                    </FooterCategory>
                </div>
                <div className="w-full md:w-1/4 md:px-8">
                    <FooterCategory title="Docs">
                        <FooterSubCategory>Getting started</FooterSubCategory>
                        <FooterListItem href="https://app.posthog.com/signup">PostHog cloud</FooterListItem>
                        <FooterListItem to="/docs/deployment" border={false}>
                            Deploying PostHog
                        </FooterListItem>

                        <FooterSubCategory>Configuring PostHog</FooterSubCategory>
                        <FooterListItem to="/docs/deployment">Installation</FooterListItem>
                        <FooterListItem to="/docs">Docs</FooterListItem>
                        <FooterListItem to="/docs/api/overview">API</FooterListItem>
                        <FooterListItem to="/docs/integrations" border={false}>
                            Libraries
                        </FooterListItem>

                        <FooterSubCategory>Using PostHog</FooterSubCategory>
                        <FooterListItem to="/docs/features">Features</FooterListItem>
                        <FooterListItem to="/docs/plugins/overview">Plugins</FooterListItem>
                        <FooterListItem to="/docs/tutorials">Tutorials</FooterListItem>
                        <FooterListItem to="/faq" border={false}>
                            FAQ
                        </FooterListItem>
                    </FooterCategory>
                </div>
                <div className="w-full md:w-1/4 md:pl-8">
                    <FooterCategory title="Company">
                        <FooterSubCategory>About</FooterSubCategory>
                        <FooterListItem href="https://github.com/posthog/posthog">Open source</FooterListItem>
                        <FooterListItem to="/handbook/company/story">Our story</FooterListItem>
                        <FooterListItem to="/handbook">Handbook</FooterListItem>
                        <FooterListItem to="/handbook/company/team">Team</FooterListItem>
                        <FooterListItem to="/handbook/strategy/investors">Investors</FooterListItem>
                        <FooterListItem to="/careers" border={false}>
                            Careers
                        </FooterListItem>

                        <FooterSubCategory>Resources</FooterSubCategory>
                        <FooterListItem to="/blog">Blog</FooterListItem>
                        <FooterListItem to="/media">Media</FooterListItem>
                        <FooterListItem href="https://merch.posthog.com/collections/all" border={false}>
                            Merch
                        </FooterListItem>

                        <FooterSubCategory>Get in touch</FooterSubCategory>
                        <FooterListItem href="mailto:sales@posthog.com">Contact sales</FooterListItem>
                        <FooterListItem href="https://posthog.com/support" border={false}>
                            Support
                        </FooterListItem>
                    </FooterCategory>
                </div>
            </div>

            <div className="w-11/12 mt-24 text-center">
                <span className="text-base text-white text-opacity-40">&copy; 2021 PostHog, Inc.</span>
                <div className="mt-4">
                    <Link
                        to="/privacy"
                        className="p-2 mx-1 text-white bg-transparent border rounded opacity-40 hover:text-white hover:opacity-100"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="/terms"
                        className="p-2 mx-1 text-white bg-transparent border rounded opacity-40 hover:text-white hover:opacity-100"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </div>
    )
}
