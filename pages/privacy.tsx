import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@/components/footer/footer'
import { MenuBar } from '@/components/menu-bar/menu-bar'

const Privacy: NextPage = () => {
  return (
    <div className='grid place-items-center'>
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <title>Retroloop - Privacy Policy</title>

        <meta name='title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          name='description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://retroloop.io/' />
        <meta property='og:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='og:description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />
        <meta property='og:image' content='https://retroloop.io/preview.webp' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='twitter:description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />
        <meta property='twitter:image' content='https://retroloop.io/preview.webp' />
      </Head>

      <MenuBar />

      <main className='prose prose-md max-w-prose px-5'>
        <h2 className='py-3 text-4xl'>Retroloop Privacy Policy</h2>
        <p className='py-2'>
          Your privacy is important to us. It is Retroloop&#39;s policy to respect your privacy and
          comply with any applicable law and regulation regarding any personal information we may
          collect about you, including across our website,
          <a href='https://retroloop.io'> https://retroloop.io</a>, and other sites we own and
          operate.
        </p>
        <p className='py-2'>
          Personal information is any information about you which can be used to identify you. This
          includes information about you as a person (such as name, address, and date of birth),
          your devices, payment details, and even information about how you use a website or online
          service.
        </p>
        <p className='py-2'>
          In the event our site contains links to third-party sites and services, please be aware
          that those sites and services have their own privacy policies. After following a link to
          any third-party content, you should read their posted privacy policy information about how
          they collect and use personal information. This Privacy Policy does not apply to any of
          your activities after you leave our site.
        </p>
        <p className='py-2'>This policy is effective as of 28 January 2023. </p>
        <p className='py-2'>Last updated: 28 January 2023 </p>
        <h3 className='py-3 text-3xl'>Information We Collect</h3>
        <p className='py-2'>
          Information we collect falls into one of two categories: &ldquo;voluntarily
          provided&rdquo; information and &ldquo;automatically collected&rdquo; information.
        </p>
        <p className='py-2'>
          &ldquo;Voluntarily provided&rdquo; information refers to any information you knowingly and
          actively provide us when using or participating in any of our services and promotions.
        </p>
        <p className='py-2'>
          &ldquo;Automatically collected&rdquo; information refers to any information automatically
          sent by your devices in the course of accessing our products and services.
        </p>
        <h4 className='py-3 text-2xl'>Log Data</h4>
        <p className='py-2'>
          When you visit our website, our servers may automatically log the standard data provided
          by your web browser. It may include your device’s Internet Protocol (IP) address, your
          browser type and version, the pages you visit, the time and date of your visit, the time
          spent on each page, and other details about your visit.
        </p>
        <p className='py-2'>
          Additionally, if you encounter certain errors while using the site, we may automatically
          collect data about the error and the circumstances surrounding its occurrence. This data
          may include technical details about your device, what you were trying to do when the error
          happened, and other technical information relating to the problem. You may or may not
          receive notice of such errors, even in the moment they occur, that they have occurred, or
          what the nature of the error is.
        </p>
        <p className='py-2'>
          Please be aware that while this information may not be personally identifying by itself,
          it may be possible to combine it with other data to personally identify individual
          persons.
        </p>
        <h4 className='py-3 text-2xl'>Device Data</h4>
        <p className='py-2'>
          When you visit our website or interact with our services, we may automatically collect
          data about your device, such as:
        </p>
        <ul className='list-inside list-disc'>
          <li>Device Type</li>
          <li>Geo-location data</li>
        </ul>
        <p className='py-2'>
          Data we collect can depend on the individual settings of your device and software. We
          recommend checking the policies of your device manufacturer or software provider to learn
          what information they make available to us.
        </p>
        <h4 className='py-3 text-2xl'>Personal Information</h4>
        <p className='py-2'>
          We may ask for personal information — for example, when you subscribe to our newsletter or
          when you contact us — which may include one or more of the following:
        </p>
        <ul className='list-inside list-disc'>
          <li>Name</li>
          <li>Email</li>
        </ul>
        <h4 className='py-3 text-2xl'>Transaction Data</h4>
        <p className='py-2'>
          Transaction data refers to data that accumulates over the normal course of operation on
          our platform. This may include transaction records, stored files, user profiles, analytics
          data and other metrics, as well as other types of information, created or generated, as
          users interact with our services.
        </p>
        <h4 className='py-3 text-2xl'>
          Legitimate Reasons for Processing Your Personal Information
        </h4>
        <p className='py-2'>
          We only collect and use your personal information when we have a legitimate reason for
          doing so. In which instance, we only collect personal information that is reasonably
          necessary to provide our services to you.
        </p>
        <h4 className='py-3 text-2xl'>Collection and Use of Information</h4>
        <p className='py-2'>
          We may collect personal information from you when you do any of the following on our
          website:
        </p>
        <ul className='list-inside list-disc'>
          <li className='py-1'>Register for an account</li>
          <li className='py-1'>Purchase a subscription</li>
          <li className='py-1'>
            Sign up to receive updates from us via email or social media channels
          </li>
          <li className='py-1'>Use a mobile device or web browser to access our content</li>
          <li className='py-1'>
            Contact us via email, social media, or on any similar technologies
          </li>
          <li className='py-1'>When you mention us on social media</li>
        </ul>
        <p className='py-2'>
          We may collect, hold, use, and disclose information for the following purposes, and
          personal information will not be further processed in a manner that is incompatible with
          these purposes:
        </p>
        <ul className='list-dics list-inside'>
          <li className='py-1'>
            to provide you with our platform&apos;s core features and services
          </li>
          <li className='py-1'>to contact and communicate with you</li>
          <li className='py-1'>
            to enable you to access and use our website, associated applications, and associated
            social media platforms
          </li>
        </ul>
        <p className='py-2'>
          We may combine voluntarily provided and automatically collected personal information with
          general information or research data we receive from other trusted sources. For example,
          If you provide us with your location, we may combine this with general information about
          currency and language to provide you with an enhanced experience of our site and service.
        </p>
        <h4 className='py-3 text-2xl'>Security of Your Personal Information</h4>
        <p className='py-2'>
          When we collect and process personal information, and while we retain this information, we
          will protect it within commercially acceptable means to prevent loss and theft, as well as
          unauthorized access, disclosure, copying, use, or modification.
        </p>
        <p className='py-2'>
          Although we will do our best to protect the personal information you provide to us, we
          advise that no method of electronic transmission or storage is 100% secure, and no one can
          guarantee absolute data security.
        </p>
        <p className='py-2'>
          You are responsible for selecting any password and its overall security strength, ensuring
          the security of your own information within the bounds of our services. For example,
          ensuring any passwords associated with accessing your personal information and accounts
          are secure and confidential.
        </p>
        <h4 className='py-3 text-2xl'>How Long We Keep Your Personal Information</h4>
        <p className='py-2'>
          We keep your personal information only for as long as we need to. This time period may
          depend on what we are using your information for, in accordance with this privacy policy.
          For example, if you have provided us with personal information as part of creating an
          account with us, we may retain this information for the duration your account exists on
          our system. If your personal information is no longer required for this purpose, we will
          delete it or make it anonymous by removing all details that identify you.
        </p>
        <p className='py-2'>
          However, if necessary, we may retain your personal information for our compliance with a
          legal, accounting, or reporting obligation or for archiving purposes in the public
          interest, scientific, or historical research purposes or statistical purposes.
        </p>
        <h3 className='py-3 text-3xl'>Children’s Privacy</h3>
        <p className='py-2'>
          We do not aim any of our products or services directly at children under the age of 13,
          and we do not knowingly collect personal information about children under 13.
        </p>
        <h3 className='py-3 text-3xl'>Disclosure of Personal Information to Third Parties</h3>
        <p>We may disclose personal information to: </p>
        <ul className='list-inside list-disc'>
          <li className='py-1'>a parent, subsidiary, or affiliate of our company</li>
          <li className='py-1'>
            third-party service providers for the purpose of enabling them to provide their
            services, including (without limitation) IT service providers, data storage, hosting and
            server providers, analytics, error loggers, debt collectors, maintenance or
            problem-solving providers, professional advisors, and payment systems operators
          </li>
          <li className='py-1'>our employees, contractors, and/or related entities</li>
          <li className='py-1'>our existing or potential agents or business partners</li>
          <li className='py-1'>
            credit reporting agencies, courts, tribunals, and regulatory authorities, in the event
            you fail to pay for goods or services we have provided to you
          </li>
          <li className='py-1'>
            courts, tribunals, regulatory authorities, and law enforcement officers, as required by
            law, in connection with any actual or prospective legal proceedings, or in order to
            establish, exercise, or defend our legal rights
          </li>
          <li className='py-1'>
            third parties, including agents or sub-contractors, who assist us in providing
            information, products, services, or direct marketing to you
          </li>
          <li className='py-1'>third parties to collect and process data</li>
          <li className='py-1'>
            an entity that buys, or to which we transfer all or substantially all of our assets and
            business
          </li>
        </ul>
        <p className='py-2'>Third parties we currently use include: </p>
        <ul className='list-inside list-disc'>
          <li className='py-1'>Plausible Analytics</li>
          <li className='py-1'>Sentry Error Monitoring</li>
        </ul>
        <h3 className='py-3 text-3xl'>Your Rights and Controlling Your Personal Information</h3>
        <p className='py-2'>
          <strong>Your choice:</strong> By providing personal information to us, you understand we
          will collect, hold, use, and disclose your personal information in accordance with this
          privacy policy. You do not have to provide personal information to us, however, if you do
          not, it may affect your use of our website or the products and/or services offered on or
          through it.
        </p>
        <p className='py-2'>
          <strong>Information from third parties:</strong> If we receive personal information about
          you from a third party, we will protect it as set out in this privacy policy. If you are a
          third party providing personal information about somebody else, you represent and warrant
          that you have such person’s consent to provide the personal information to us.
        </p>
        <p className='py-2'>
          <strong>Marketing permission:</strong> If you have previously agreed to us using your
          personal information for direct marketing purposes, you may change your mind at any time
          by contacting us using the details below.
        </p>
        <p className='py-2'>
          <strong>Access:</strong> You may request details of the personal information that we hold
          about you.
        </p>
        <p className='py-2'>
          <strong>Correction:</strong> If you believe that any information we hold about you is
          inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using
          the details provided in this privacy policy. We will take reasonable steps to correct any
          information found to be inaccurate, incomplete, misleading, or out of date.
        </p>
        <p className='py-2'>
          <strong>Non-discrimination:</strong> We will not discriminate against you for exercising
          any of your rights over your personal information. Unless your personal information is
          required to provide you with a particular service or offer (for example processing
          transaction data), we will not deny you goods or services and/or charge you different
          prices or rates for goods or services, including through granting discounts or other
          benefits, or imposing penalties, or provide you with a different level or quality of goods
          or services.
        </p>
        <p className='py-2'>
          <strong>Notification of data breaches:</strong> We will comply with laws applicable to us
          in respect of any data breach.
        </p>
        <p className='py-2'>
          <strong>Complaints:</strong> If you believe that we have breached a relevant data
          protection law and wish to make a complaint, please contact us using the details below and
          provide us with full details of the alleged breach. We will promptly investigate your
          complaint and respond to you, in writing, setting out the outcome of our investigation and
          the steps we will take to deal with your complaint. You also have the right to contact a
          regulatory body or data protection authority in relation to your complaint.
        </p>
        <p className='py-2'>
          <strong>Unsubscribe:</strong> To unsubscribe from our email database or opt-out of
          communications (including marketing communications), please contact us using the details
          provided in this privacy policy, or opt-out using the opt-out facilities provided in the
          communication. We may need to request specific information from you to help us confirm
          your identity.
        </p>
        <h3 className='py-3 text-3xl'>Business Transfers</h3>
        <p className='py-2'>
          If we or our assets are acquired, or in the unlikely event that we go out of business or
          enter bankruptcy, we would include data, including your personal information, among the
          assets transferred to any parties who acquire us. You acknowledge that such transfers may
          occur, and that any parties who acquire us may, to the extent permitted by applicable law,
          continue to use your personal information according to this policy, which they will be
          required to assume as it is the basis for any ownership or use rights we have over such
          information.
        </p>
        <h3 className='py-3 text-3xl'>Limits of Our Policy</h3>
        <p className='py-2'>
          Our website may link to external sites that are not operated by us. Please be aware that
          we have no control over the content and policies of those sites, and cannot accept
          responsibility or liability for their respective privacy practices.
        </p>
        <h3 className='py-3 text-3xl'>Changes to This Policy</h3>
        <p className='py-2'>
          At our discretion, we may change our privacy policy to reflect updates to our business
          processes, current acceptable practices, or legislative or regulatory changes. If we
          decide to change this privacy policy, we will post the changes here at the same link by
          which you are accessing this privacy policy.
        </p>
        <p className='py-2'>
          If the changes are significant, or if required by applicable law, we will contact you
          (based on your selected preferences for communications from us) and all our registered
          users with the new details and links to the updated or changed policy.
        </p>
        <p className='py-2'>
          If required by law, we will get your permission or give you the opportunity to opt in to
          or opt out of, as applicable, any new uses of your personal information.
        </p>
        <h3 className='py-3 text-3xl'>
          Additional Disclosures for General Data Protection Regulation (GDPR) Compliance (EU)
        </h3>
        <h4 className='py-3 text-2xl'>Data Controller / Data Processor</h4>
        <p className='py-2'>
          The GDPR distinguishes between organisations that process personal information for their
          own purposes (known as &ldquo;data controllers&rdquo;) and organizations that process
          personal information on behalf of other organizations (known as &ldquo;data
          processors&rdquo;). We, Retroloop, located at the address provided in our Contact Us
          section, are a Data Controller with respect to the personal information you provide to us.
        </p>
        <h4 className='py-3 text-2xl'>Legal Bases for Processing Your Personal Information</h4>
        <p className='py-2'>
          We will only collect and use your personal information when we have a legal right to do
          so. In which case, we will collect and use your personal information lawfully, fairly, and
          in a transparent manner. If we seek your consent to process your personal information, and
          you are under 16 years of age, we will seek your parent or legal guardian’s consent to
          process your personal information for that specific purpose.
        </p>
        <p className='py-2'>
          Our lawful bases depend on the services you use and how you use them. This means we only
          collect and use your information on the following grounds:
        </p>
        <h5 className='py-3 text-xl'>Consent From You</h5>
        <p className='py-2'>
          Where you give us consent to collect and use your personal information for a specific
          purpose. You may withdraw your consent at any time using the facilities we provide;
          however this will not affect any use of your information that has already taken place. You
          may consent to providing your email address for the purpose of receiving marketing emails
          from us. While you may unsubscribe at any time, we cannot recall any email we have already
          sent. If you have any further enquiries about how to withdraw your consent, please feel
          free to enquire using the details provided in the Contact Us section of this privacy
          policy.
        </p>
        <h5 className='py-3 text-xl'>Performance of a Contract or Transaction</h5>
        <p className='py-2'>
          Where you have entered into a contract or transaction with us, or in order to take
          preparatory steps prior to our entering into a contract or transaction with you. For
          example, if you purchase a product, service, or subscription from us, we may need to use
          your personal and payment information in order to process and deliver your order.
        </p>
        <h5 className='py-3 text-xl'>Our Legitimate Interests</h5>
        <p className='py-2'>
          Where we assess it is necessary for our legitimate interests, such as for us to provide,
          operate, improve and communicate our services. We consider our legitimate interests to
          include research and development, understanding our audience, marketing and promoting our
          services, measures taken to operate our services efficiently, marketing analysis, and
          measures taken to protect our legal rights and interests.
        </p>
        <h5 className='py-3 text-xl'>Compliance with Law</h5>
        <p className='py-2'>
          In some cases, we may have a legal obligation to use or keep your personal information.
          Such cases may include (but are not limited to) court orders, criminal investigations,
          government requests, and regulatory obligations. If you have any further enquiries about
          how we retain personal information in order to comply with the law, please feel free to
          enquire using the details provided in the Contact Us section of this privacy policy.
        </p>
        <h4 className='py-3 text-2xl'>
          International Transfers Outside of the European Economic Area (EEA)
        </h4>
        <p className='py-2'>
          We will ensure that any transfer of personal information from countries in the European
          Economic Area (EEA) to countries outside the EEA will be protected by appropriate
          safeguards, for example by using standard data protection clauses approved by the European
          Commission, or the use of binding corporate rules or other legally accepted means.
        </p>
        <h4 className='py-3 text-2xl'>Your Rights and Controlling Your Personal Information</h4>
        <p className='py-2'>
          <strong>Restrict:</strong> You have the right to request that we restrict the processing
          of your personal information if (i) you are concerned about the accuracy of your personal
          information; (ii) you believe your personal information has been unlawfully processed;
          (iii) you need us to maintain the personal information solely for the purpose of a legal
          claim; or (iv) we are in the process of considering your objection in relation to
          processing on the basis of legitimate interests.
        </p>
        <p className='py-2'>
          <strong>Objecting to processing:</strong> You have the right to object to processing of
          your personal information that is based on our legitimate interests or public interest. If
          this is done, we must provide compelling legitimate grounds for the processing which
          overrides your interests, rights, and freedoms, in order to proceed with the processing of
          your personal information.
        </p>
        <p className='py-2'>
          <strong>Data portability:</strong> You may have the right to request a copy of the
          personal information we hold about you. Where possible, we will provide this information
          in CSV format or other easily readable machine format. You may also have the right to
          request that we transfer this personal information to a third party.
        </p>
        <p className='py-2'>
          <strong>Deletion:</strong> You may have a right to request that we delete the personal
          information we hold about you at any time, and we will take reasonable steps to delete
          your personal information from our current records. If you ask us to delete your personal
          information, we will let you know how the deletion affects your use of our website or
          products and services. There may be exceptions to this right for specific legal reasons
          which, if applicable, we will set out for you in response to your request. If you
          terminate or delete your account, we will delete your personal information within 60 days
          of the deletion of your account. Please be aware that search engines and similar third
          parties may still retain copies of your personal information that has been made public at
          least once, like certain profile information and public comments, even after you have
          deleted the information from our services or deactivated your account.
        </p>
        <h3 className='py-3 text-3xl'>Additional Disclosures for California Compliance (US)</h3>
        <p className='py-2'>
          Under California Civil Code Section 1798.83, if you live in California and your business
          relationship with us is mainly for personal, family, or household purposes, you may ask us
          about the information we release to other organizations for their marketing purposes.
        </p>
        <p className='py-2'>
          To make such a request, please contact us using the details provided in this privacy
          policy with &ldquo;Request for California privacy information&rdquo; in the subject line.
          You may make this type of request once every calendar year. We will email you a list of
          categories of personal information we revealed to other organisations for their marketing
          purposes in the last calendar year, along with their names and addresses. Not all personal
          information shared in this way is covered by Section 1798.83 of the California Civil Code.
        </p>
        <h4 className='py-3 text-2xl'>Do Not Track</h4>
        <p className='py-2'>
          Some browsers have a &ldquo;Do Not Track&rdquo; feature that lets you tell websites that
          you do not want to have your online activities tracked. At this time, we do not respond to
          browser &ldquo;Do Not Track&rdquo; signals.
        </p>
        <p className='py-2'>
          We adhere to the standards outlined in this privacy policy, ensuring we collect and
          process personal information lawfully, fairly, transparently, and with legitimate, legal
          reasons for doing so.
        </p>
        <h4 className='py-3 text-2xl'>CCPA-permitted financial incentives</h4>
        <p className='py-2'>
          In accordance with your right to non-discrimination, we may offer you certain financial
          incentives permitted by the CCPA that can result in different prices, rates, or quality
          levels for the goods or services we provide.
        </p>
        <p className='py-2'>
          Any CCPA-permitted financial incentive we offer will reasonably relate to the value of
          your personal information, and we will provide written terms that describe clearly the
          nature of such an offer. Participation in a financial incentive program requires your
          prior opt-in consent, which you may revoke at any time.
        </p>
        <h4 className='py-3 text-2xl'>California Notice of Collection</h4>
        <p className='py-2'>
          In the past 12 months, we have collected the following categories of personal information
          enumerated in the California Consumer Privacy Act:
        </p>
        <ul className='list-inside list-disc'>
          <li className='py-1'>
            Identifiers, such as name, email address, phone number account name, IP address, and an
            ID or number assigned to your account.
          </li>
          <li className='py-1'>Geolocation data.</li>
        </ul>
        <p className='py-2'>
          For more information on information we collect, including the sources we receive
          information from, review the &ldquo;Information We Collect&rdquo; section. We collect and
          use these categories of personal information for the business purposes described in the
          &ldquo;Collection and Use of Information&rdquo; section, including to provide and manage
          our Service.
        </p>
        <h4 className='py-3 text-2xl'>Right to Know and Delete</h4>
        <p className='py-2'>
          If you are a California resident, you have rights to delete your personal information we
          collected and know certain information about our data practices in the preceding 12
          months. In particular, you have the right to request the following from us:
        </p>
        <ul className='list-inside list-disc'>
          <li className='py-1'>
            The categories of personal information we have collected about you;
          </li>
          <li className='py-1'>
            The categories of sources from which the personal information was collected;
          </li>
          <li className='py-1'>
            The categories of personal information about you we disclosed for a business purpose or
            sold;
          </li>
          <li className='py-1'>
            The categories of third parties to whom the personal information was disclosed for a
            business purpose or sold;
          </li>
          <li className='py-1'>
            The business or commercial purpose for collecting or selling the personal information;
            and
          </li>
          <li className='py-1'>
            The specific pieces of personal information we have collected about you.
          </li>
        </ul>
        <p className='py-2'>
          To exercise any of these rights, please contact us using the details provided in this
          privacy policy.
        </p>
        <h4 className='py-3 text-2xl'>Shine the Light</h4>
        <p className='py-2'>
          If you are a California resident, in addition to the rights discussed above, you have the
          right to request information from us regarding the manner in which we share certain
          personal information as defined by California’s &ldquo;Shine the Light&rdquo; with third
          parties and affiliates for their own direct marketing purposes.
        </p>
        <p className='py-2'>
          To receive this information, send us a request using the contact details provided in this
          privacy policy. Requests must include &ldquo;California Privacy Rights Request&rdquo; in
          the first line of the description and include your name, street address, city, state, and
          ZIP code.
        </p>
        <h3 className='py-3 text-3xl'>Contact Us</h3>
        <p className='py-2'>
          For any questions or concerns regarding your privacy, you may contact us using the
          following details:
        </p>
        <p className='py-2'>
          Luis Steidle
          <br />
          info@mail.retroloop.io
        </p>
      </main>

      <Footer />
    </div>
  )
}
export default Privacy