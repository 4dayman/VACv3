
<template>
  <div class="about">
      <Header/>
      <div>
        <HeadComp msg="Terms & Conditions"/>
        <div class="faq_wrapper">
            <TermsAndPolicy
                v-for="(faq, i) in faqs"
                :key="i"
                :faq="faq"
                :index="i"
                :open="faq.open"
                :class="faq.open ? 'open' : ''"
                @toggleOpen="toggleOpen"
            />
        </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeadComp from '@/components/HeadComp.vue'
import TermsAndPolicy from '@/components/TermsAndPolicy.vue'
import Footer from '@/components/Footer.vue'

export default {
components: {
  Header,
  HeadComp,
  TermsAndPolicy,
  Footer
},
methods: {
    toggleOpen(i) {
        this.faqs = this.faqs.map((faq, index) => {
            if (index === i) {
                faq.open = !faq.open
            } else {faq.open = false}
            return faq;
        })
    }
},
data() {
  return {
    faqs: [
        {
            open: false,
            title: 'Please read these terms and conditions of use carefully before using this web site',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Modifications of the terms and conditions',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'How we work',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Authorization',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Links',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Minors',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Restricted access',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Governing law',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Privacy policy',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Personal information',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Collecting personal information',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Using and sharing personal information',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Sharing your personal information',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Retaining your personal information',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Contacting you',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Accessing your personal information stored by us',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
        {
            open: false,
            title: 'Responding to privacy concerns or complaints',
            desc: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. '
        },
    ]
  }
}

}

</script>


<style lang="scss" scoped>
.about {
    margin-top: 80px;
    display: grid;
    grid-template: 1fr / 1fr;
}
.faq_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px 20px 15px;
    @media (max-width: 768px) {
        padding: 0 24px 20px 24px;
    }
}

</style>