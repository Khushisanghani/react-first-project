import React  from 'react';
import "./Term.css"
function Term(){
    return(
        <>
        <div className='term-container'>
            <p>These Terms of Use ("Terms") govern your use of this website hosted and provided by Meta Platforms, Inc. ("Meta", "us" or "we"), ("Website") and any services offered through the Website ("Services").</p>
            <p>These Terms are a legal contract between you and us so it is important that you review them carefully.</p>
            <p>For clarity, these Terms only apply to this Website and do not apply to any:</p>
        </div>
        <div className='point'>
            <p>1.use of open source code, documentation or specifications made available on GitHub, which are governed by the terms of the applicable open source license;</p>
            <p>2.pull requests, issues and any other interactions or features related to participation in open source projects on GitHub, which are governed by GitHub's terms and conditions; or</p>
            <p>3.use of any other Meta website, service or product, which are governed by the terms and conditions applicable to those offerings.</p>
            <h3>1.What you can do on this Website</h3>
            <p>We make this Website available to you and others to help everyone better understand our open source projects. In exchange, we need you to make the following commitments:</p>
            <h3>2.Links To Third-Party Content</h3>
            <p>The Website or Services may contain links to third-party content. For example, our user communities may be hosted by third party platforms over which we have no control and for which we have no responsibility. Therefore, please review each of these platforms or websites' terms of use and privacy policies before participating.</p>
            <h3>3.Limits on Liability</h3>
            <p>We do not exclude or limit in any way our liability to you where it would be unlawful to do so therefore depending on the country where you reside some of these exclusions and limitations may not apply to you.</p>
        </div>
        </>
    )
}
export default Term;