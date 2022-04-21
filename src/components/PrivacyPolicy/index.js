import React from "react";
import ComponentHeader from "../ComponentHeader";

// TODO: replace language with company name and stuff
// boilerplate from GDPR website: https://gdpr.eu/privacy-notice/

const PrivacyPolicy = () => {
    return (
        <>
            <h1>Privacy Policy</h1>

            <p>This privacy policy will explain how our organization uses the personal data we collect from you when you
                use our website.</p>

            {ComponentHeader("What data do we collect?")}

            <p>Our Company collects the following data:</p>

            <p>Personal identification information (Name, email address, phone number, etc.)
                [Add any other data your company collects]</p>

            {ComponentHeader("How do we collect your data?")}

            <p>You directly provide Our Company with most of the data we collect. We collect data and process
                data when you:</p>

            <p>Register online or place an order for any of our products or services.</p>
            <p>Voluntarily complete a customer survey or provide feedback on any of our message boards
                or via email.</p>
            <p>Use or view our website via your browser’s cookies.</p>

            <p>Our Company may also receive your data indirectly from the following sources:</p>

            {ComponentHeader("How will we use your data?")}

            <p>Our Company collects your data so that we can:</p>

            <p>Process your order and manage your account.</p>
            <p>Email you with special offers on other products and services we think you
                might like.</p>

            <p>If you agree, Our Company will share your data with our partner companies so
                that they may offer you their products and services.</p>


            <p>When Our Company processes your order, it may send your data to, and also use
                the resulting information from, credit reference agencies to prevent fraudulent purchases.</p>

            {ComponentHeader("How do we store your data?")}

            <p>Our Company securely stores your data at [enter the location and describe
                security precautions taken].</p>

            <p>Our Company will keep your [enter type of data] for [enter time period]. Once
                this time period has expired, we will delete your data by [enter how you delete users’ data].</p>

            {ComponentHeader("Marketing")}

            <p>Our Company would like to send you information about products and services of
                ours that we think you might like, as well as those of our partner companies.</p>

            <p>If you have agreed to receive marketing, you may always opt out at a later date.</p>

            <p>You have the right at any time to stop Our Company from contacting you for
                marketing purposes or giving your data to other members of the Our Company Group.</p>

            <p>If you no longer wish to be contacted for marketing purposes, please click here.</p>

            {ComponentHeader("What are your data protection rights?")}

            <p>Our Company would like to make sure you are fully aware of all of your data
                protection rights. Every user
                is entitled to the following:</p>

            <ul>
                <li><p>The right to access – You have the right to request Our Company for
                    copies of your personal data.
                    We may charge you a small fee for this service.</p></li>

                <li><p>The right to rectification – You have the right to request that Our
                    Company correct any
                    information you believe is inaccurate. You also have the right to
                    request Our Company to complete
                    the information
                    you believe is incomplete.</p></li>

                <li><p>The right to erasure – You have the right to request that Our Company
                    erase your personal data,
                    under certain conditions.</p></li>

                <li><p>The right to restrict processing – You have the right to request that
                    Our Company restrict the
                    processing of your personal data, under certain conditions.</p></li>

                <li><p>The right to object to processing – You have the right to object to
                    Our Company’s processing of
                    your personal data, under certain conditions.</p></li>

                <li><p>The right to data portability – You have the right to request that
                    Our Company transfer the data
                    that we have collected to another organization, or directly to you,
                    under certain conditions.</p>
                </li>
            </ul>

            <p>If you make a request, we have one month to respond to you. If you would like
                to exercise any of these
                rights, please contact us at our email:</p>

            <p>Call us at:</p>

            <p>Or write to us:</p>

            {ComponentHeader("Cookies")}

            <p>Cookies are text files placed on your computer to collect standard Internet
                log information and visitor
                behavior information. When you visit our websites, we may collect
                information from you automatically
                through
                cookies or similar technology.</p>

            <p>For further information, visit allaboutcookies.org.</p>

            {ComponentHeader("How do we use cookies?")}

            <p>Our Company uses cookies in a range of ways to improve your experience on our
                website, including:</p>

            <ul>
                <li><p>Keeping you signed in</p></li>
                <li><p>Understanding how you use our website</p></li>
            </ul>

            {ComponentHeader("What types of cookies do we use?")}

            <p>There are a number of different types of cookies, however, our website
                uses:</p>

            <ul>
                <li><p>Functionality – Our Company uses these cookies so that we recognize
                    you on our website and
                    remember
                    your previously selected preferences. These could include what language
                    you prefer and location you
                    are
                    in. A mix of first-party and third-party cookies are used.</p>
                </li>
                <li><p>Advertising – Our Company uses these cookies to collect information
                    about your visit to our
                    website,
                    the content you viewed, the links you followed and information about
                    your browser, device, and your
                    IP
                    address. Our Company sometimes shares some limited aspects of this data
                    with third parties for
                    advertising
                    purposes. We may also share online data collected through cookies with
                    our advertising partners.
                    This means
                    that when you visit another website, you may be shown advertising based
                    on your browsing patterns on
                    our
                    website.</p>
                </li>
            </ul>

            {ComponentHeader("How to manage cookies")}

            <p>You can set your browser not to accept cookies, and the above website tells
                you how to remove cookies
                from
                your browser. However, in a few cases, some of our website features may not
                function as a result.
                Privacy policies of other websites</p>

            <p>The Our Company website contains links to other websites. Our privacy policy
                applies only to our website,
                so
                if you click on a link to another website, you should read their privacy
                policy.
                Changes to our privacy policy</p>

            <p>Our Company keeps its privacy policy under regular review and places any
                updates on this web page. This
                privacy policy was last updated on 9 January 2019.</p>

            {ComponentHeader("How to contact us")}

            <p>If you have any questions about Our Company’s privacy policy, the data we
                hold on you, or you would like
                to
                exercise one of your data protection rights, please do not hesitate to
                contact us.
            </p>
            <p>Email us at:</p>
            <p>Call us:</p>
            <p>Or write to us at:</p>

            {ComponentHeader("How to contact the appropriate authority")}

            <p>Should you wish to report a complaint or if you feel that Our Company has not
                addressed your concern in a
                satisfactory manner, you may contact the Information Commissioner’s
                Office.</p>

            <p>Email:</p>
            <p>Address:</p>

        </>
    );
};

export default PrivacyPolicy;
