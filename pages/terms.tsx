import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@/app/components/footer/footer'
import { MenuBar } from '@/app/components/menu-bar/menu-bar'

const Terms: NextPage = () => {
  return (
    <div className='grid place-items-center'>
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <title>Retroloop - Terms of Use</title>

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

      <main className='px-5 prose prose-md max-w-prose '>
        <article>
          <h2 className='py-3 text-4xl'>Retroloop Terms of Service</h2>
          <p className='py-2'>
            These Terms of Service govern your use of the website located at
            <a href='https://retroloop.io'>https://retroloop.io</a> and any related services
            provided by Retroloop.
          </p>
          <p className='py-2'>
            By accessing <a href='https://retroloop.io'>https://retroloop.io</a>, you agree to abide
            by these Terms of Service and to comply with all applicable laws and regulations. If you
            do not agree with these Terms of Service, you are prohibited from using or accessing
            this website or using any other services provided by Retroloop.
          </p>
          <p className='py-2'>
            We, Retroloop, reserve the right to review and amend any of these Terms of Service at
            our sole discretion. Upon doing so, we will update this page. Any changes to these Terms
            of Service will take effect immediately from the date of publication.
          </p>
          <p className='py-2'>These Terms of Service were last updated on 28 January 2023. </p>
          <h3 className='py-3 text-3xl'>Limitations of Use</h3>
          <p className='py-2'>
            By using this website, you warrant on behalf of yourself, your users, and other parties
            you represent that you will not:
          </p>
          <ol className='list-disc list-inside'>
            <li className='py-1'>
              modify, copy, prepare derivative works of, decompile, or reverse engineer any
              materials and software contained on this website;
            </li>
            <li className='py-1'>
              remove any copyright or other proprietary notations from any materials and software on
              this website;
            </li>
            <li className='py-1'>
              transfer the materials to another person or “mirror” the materials on any other
              server;
            </li>
            <li className='py-1'>
              knowingly or negligently use this website or any of its associated services in a way
              that abuses or disrupts our networks or any other service Retroloop provides;
            </li>
            <li className='py-1'>
              use this website or its associated services to transmit or publish any harassing,
              indecent, obscene, fraudulent, or unlawful material;
            </li>
            <li className='py-1'>
              use this website or its associated services in violation of any applicable laws or
              regulations;
            </li>
            <li className='py-1'>
              use this website in conjunction with sending unauthorized advertising or spam;
            </li>
            <li className='py-1'>
              harvest, collect, or gather user data without the user’s consent; or
            </li>
            <li className='py-1'>
              use this website or its associated services in such a way that may infringe the
              privacy, intellectual property rights, or other rights of third parties.
            </li>
          </ol>
          <h3 className='py-3 text-3xl'>Intellectual Property</h3>
          <p className='py-2'>
            The intellectual property in the materials contained in this website are owned by or
            licensed to Retroloop and are protected by applicable copyright and trademark law. We
            grant our users permission to download one copy of the materials for personal,
            non-commercial transitory use.
          </p>
          <p className='py-2'>
            This constitutes the grant of a license, not a transfer of title. This license shall
            automatically terminate if you violate any of these restrictions or the Terms of
            Service, and may be terminated by Retroloop at any time.
          </p>
          <h3 className='py-3 text-3xl'>Liability</h3>
          <p className='py-2'>
            Our website and the materials on our website are provided on an &apos;as is&apos; basis.
            To the extent permitted by law, Retroloop makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property, or other violation of rights.
          </p>
          <p className='py-2'>
            In no event shall Retroloop or its suppliers be liable for any consequential loss
            suffered or incurred by you or any third party arising from the use or inability to use
            this website or the materials on this website, even if Retroloop or an authorized
            representative has been notified, orally or in writing, of the possibility of such
            damage.
          </p>
          <p className='py-2'>
            In the context of this agreement, &ldquo;consequential loss&rdquo; includes any
            consequential loss, indirect loss, real or anticipated loss of profit, loss of benefit,
            loss of revenue, loss of business, loss of goodwill, loss of opportunity, loss of
            savings, loss of reputation, loss of use and/or loss or corruption of data, whether
            under statute, contract, equity, tort (including negligence), indemnity, or otherwise.
          </p>
          <p className='py-2'>
            Because some jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages, these limitations may
            not apply to you.
          </p>
          <h3 className='py-3 text-3xl'>Accuracy of Materials</h3>
          <p className='py-2'>
            The materials appearing on our website are not comprehensive and are for general
            information purposes only. Retroloop does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use of the materials on
            this website, or otherwise relating to such materials or on any resources linked to this
            website.
          </p>
          <h3 className='py-3 text-3xl'>Links</h3>
          <p className='py-2'>
            Retroloop has not reviewed all of the sites linked to its website and is not responsible
            for the contents of any such linked site. The inclusion of any link does not imply
            endorsement, approval, or control by Retroloop of the site. Use of any such linked site
            is at your own risk and we strongly advise you make your own investigations with respect
            to the suitability of those sites.
          </p>
          <h3 className='py-3 text-3xl'>Right to Terminate</h3>
          <p className='py-2'>
            We may suspend or terminate your right to use our website and terminate these Terms of
            Service immediately upon written notice to you for any breach of these Terms of Service.
          </p>
          <h3 className='py-3 text-3xl'>Severance</h3>
          <p className='py-2'>
            Any term of these Terms of Service which is wholly or partially void or unenforceable is
            severed to the extent that it is void or unenforceable. The validity of the remainder of
            these Terms of Service is not affected.
          </p>
          <h3 className='py-3 text-3xl'>Governing Law</h3>
          <p className='py-2'>
            These Terms of Service are governed by and construed in accordance with the laws of
            Germany. You irrevocably submit to the exclusive jurisdiction of the courts in that
            State or location.
          </p>
        </article>

        <hr className='my-10' />

        <article>
          <h2 className='py-3 text-4xl'>Retroloop Acceptable Use Policy</h2>
          <p className='py-2'>
            This acceptable use policy covers the products, services, and technologies (collectively
            referred to as the &ldquo;Products&rdquo;) provided by Retroloop under any ongoing
            agreement. It’s designed to protect us, our customers, and the general Internet
            community from unethical, irresponsible, and illegal activity.{' '}
          </p>
          <p className='py-2'>
            Retroloop customers found engaging in activities prohibited by this acceptable use
            policy can be liable for service suspension and account termination. In extreme cases,
            we may be legally obliged to report such customers to the relevant authorities.{' '}
          </p>
          <p className='py-2'>This policy was last reviewed on 28 January 2023. </p>
          <h3 className='py-3 text-3xl'>Fair use</h3>
          <p className='py-2'>
            We provide our facilities with the assumption your use will be &ldquo;business as
            usual&rdquo;, as per our offer schedule. If your use is considered to be excessive, then
            additional fees may be charged, or capacity may be restricted.{' '}
          </p>
          <p className='py-2'>
            We are opposed to all forms of abuse, discrimination, rights infringement, and/or any
            action that harms or disadvantages any group, individual, or resource. We expect our
            customers and, where applicable, their users (&ldquo;end-users&rdquo;) to likewise
            engage our Products with similar intent.{' '}
          </p>
          <h3 className='py-3 text-3xl'>Customer accountability</h3>
          <p className='py-2'>
            We regard our customers as being responsible for their own actions as well as for the
            actions of anyone using our Products with the customer’s permission. This responsibility
            also applies to anyone using our Products on an unauthorized basis as a result of the
            customer’s failure to put in place reasonable security measures.{' '}
          </p>
          <p className='py-2'>
            By accepting Products from us, our customers agree to ensure adherence to this policy on
            behalf of anyone using the Products as their end users. Complaints regarding the actions
            of customers or their end-users will be forwarded to the nominated contact for the
            account in question.{' '}
          </p>
          <p className='py-2'>
            If a customer — or their end-user or anyone using our Products as a result of the
            customer — violates our acceptable use policy, we reserve the right to terminate any
            Products associated with the offending account or the account itself or take any
            remedial or preventative action we deem appropriate, without notice. To the extent
            permitted by law, no credit will be available for interruptions of service resulting
            from any violation of our acceptable use policy.{' '}
          </p>
          <h3 className='py-3 text-3xl'>Prohibited activity</h3>
          <h4 className='py-3 text-2xl'>
            Copyright infringement and access to unauthorized material
          </h4>
          <p className='py-2'>
            Our Products must not be used to transmit, distribute or store any material in violation
            of any applicable law. This includes but isn’t limited to:{' '}
          </p>
          <ol type='i' className='list-decimal list-inside'>
            <li className='py-1'>
              any material protected by copyright, trademark, trade secret, or other intellectual
              property right used without proper authorization, and
            </li>
            <li className='py-1'>
              any material that is obscene, defamatory, constitutes an illegal threat or violates
              export control laws.
            </li>
          </ol>
          <p className='py-2'>
            The customer is solely responsible for all material they input, upload, disseminate,
            transmit, create or publish through or on our Products, and for obtaining legal
            permission to use any works included in such material.{' '}
          </p>
          <h4 className='py-3 text-2xl'>SPAM and unauthorized message activity</h4>
          <p className='py-2'>
            Our Products must not be used for the purpose of sending unsolicited bulk or commercial
            messages in violation of the laws and regulations applicable to your jurisdiction
            (“spam”). This includes but isn’t limited to sending spam, soliciting customers from
            spam sent from other service providers, and collecting replies to spam sent from other
            service providers.{' '}
          </p>
          <p className='py-2'>
            Our Products must not be used for the purpose of running unconfirmed mailing lists or
            telephone number lists (&ldquo;messaging lists&rdquo;). This includes but isn’t limited
            to subscribing email addresses or telephone numbers to any messaging list without the
            permission of the email address or telephone number owner, and storing any email
            addresses or telephone numbers subscribed in this way. All messaging lists run on or
            hosted by our Products must be &ldquo;confirmed opt-in&rdquo;. Verification of the
            address or telephone number owner’s express permission must be available for the
            lifespan of the messaging list.{' '}
          </p>
          <p className='py-2'>
            We prohibit the use of email lists, telephone number lists or databases purchased from
            third parties intended for spam or unconfirmed messaging list purposes on our Products.{' '}
          </p>
          <p className='py-2'>
            This spam and unauthorized message activity policy applies to messages sent using our
            Products, or to messages sent from any network by the customer or any person on the
            customer’s behalf, that directly or indirectly refer the recipient to a site hosted via
            our Products.{' '}
          </p>
          <h4 className='py-3 text-2xl'>Unethical, exploitative, and malicious activity</h4>
          <p className='py-2'>
            Our Products must not be used for the purpose of advertising, transmitting, or otherwise
            making available any software, program, product, or service designed to violate this
            acceptable use policy, or the acceptable use policy of other service providers. This
            includes but isn’t limited to facilitating the means to send spam and the initiation of
            network sniffing, pinging, packet spoofing, flooding, mail-bombing, and
            denial-of-service attacks.{' '}
          </p>
          <p className='py-2'>
            Our Products must not be used to access any account or electronic resource where the
            group or individual attempting to gain access does not own or is not authorized to
            access the resource (e.g. &ldquo;hacking&rdquo;, &ldquo;cracking&rdquo;,
            &ldquo;phreaking&rdquo;, etc.).{' '}
          </p>
          <p className='py-2'>
            Our Products must not be used for the purpose of intentionally or recklessly introducing
            viruses or malicious code into our Products and systems.{' '}
          </p>
          <p className='py-2'>
            Our Products must not be used for purposely engaging in activities designed to harass
            another group or individual. Our definition of harassment includes but is not limited to
            denial-of-service attacks, hate-speech, advocacy of racial or ethnic intolerance, and
            any activity intended to threaten, abuse, infringe upon the rights of, or discriminate
            against any group or individual.{' '}
          </p>
          <p className='py-2'>
            Other activities considered unethical, exploitative, and malicious include:{' '}
          </p>
          <ol type='i' className='list-decimal list-inside '>
            <li className='py-1'>
              Obtaining (or attempting to obtain) services from us with the intent to avoid payment;
            </li>
            <li className='py-1'>
              Using our facilities to obtain (or attempt to obtain) services from another provider
              with the intent to avoid payment;
            </li>
            <li className='py-1'>
              The unauthorized access, alteration, or destruction (or any attempt thereof) of any
              information about our customers or end-users, by any means or device;
            </li>
            <li className='py-1'>
              Using our facilities to interfere with the use of our facilities and network by other
              customers or authorized individuals;
            </li>
            <li className='py-1'>
              Publishing or transmitting any content of links that incite violence, depict a violent
              act, depict child pornography, or threaten anyone’s health and safety;
            </li>
            <li className='py-1'>
              Any act or omission in violation of consumer protection laws and regulations;
            </li>
            <li className='py-1'>Any violation of a person’s privacy.</li>
          </ol>
          <p className='py-2'>
            Our Products may not be used by any person or entity, which is involved with or
            suspected of involvement in activities or causes relating to illegal gambling;
            terrorism; narcotics trafficking; arms trafficking or the proliferation, development,
            design, manufacture, production, stockpiling, or use of nuclear, chemical or biological
            weapons, weapons of mass destruction, or missiles; in each case including any
            affiliation with others whatsoever who support the above such activities or causes.{' '}
          </p>
          <h4 className='py-3 text-2xl'>Unauthorized use of Retroloop property</h4>
          <p className='py-2'>
            We prohibit the impersonation of Retroloop, the representation of a significant business
            relationship with Retroloop, or ownership of any Retroloop property (including our
            Products and brand) for the purpose of fraudulently gaining service, custom, patronage,
            or user trust.{' '}
          </p>
          <h3 className='py-3 text-3xl'>About this policy</h3>
          <p className='py-2'>
            This policy outlines a non-exclusive list of activities and intent we deem unacceptable
            and incompatible with our brand.{' '}
          </p>
          <p className='py-2'>
            We reserve the right to modify this policy at any time by publishing the revised version
            on our website. The revised version will be effective from the earlier of:{' '}
          </p>
          <ul className='list-disc list-inside'>
            <li className='py-1'>
              the date the customer uses our Products after we publish the revised version on our
              website; or
            </li>
            <li className='py-1'>30 days after we publish the revised version on our website.</li>
          </ul>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export default Terms
