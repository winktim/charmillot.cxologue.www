<template>
  <section
    id="prendre-contact"
    class="sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10"
  >
    <h2 class="font-heading text-2xl text-center mb-8">
      Prendre contact par téléphone
    </h2>
    <a href="tel:+41781234567"
      ><span class="material-icons">phone</span>078 123 45 67</a
    >

    <h2 class="font-heading text-2xl text-center mb-8">
      Formulaire de contact
    </h2>

    <form action="" class="flex flex-col mx-2 md:w-200 md:mx-auto">
      <input
        class="p-2 rounded-md"
        aria-label="Nom"
        type="text"
        name="lastname-input"
        id="lastname-input"
        placeholder="Nom *"
      />
      <input
        aria-label="Prénom"
        type="text"
        name="firstname-input"
        id="firstname-input"
        placeholder="Prénom *"
      />
      <input
        aria-label="Email"
        type="email"
        name="email-input"
        id="email-input"
        placeholder="Email *"
      />
      <input
        aria-label="Téléphone"
        type="tel"
        name="phone-input"
        id="phone-input"
        placeholder="Téléphone"
      />
      <textarea
        aria-label="Message"
        name="message-input"
        id="message-input"
        rows="10"
        placeholder="Message *"
      ></textarea>
      <input
        aria-label="Sécurité: quelle lettre apparaît 2 fois dans le logo du site ?"
        type="text"
        name="security-input"
        id="security-input"
        placeholder="Sécurité *: quelle lettre apparaît 2 fois dans le logo du site ?"
      />
      <p>
        <span class="text-gray-500"
          >Les champs marqués d’une * sont requis. </span
        ><br />
        Mme Charmillot prendra contact avec vous aussi tôt que possible.
      </p>

      <input type="submit" value="Envoyer" />
    </form>

    <h2 class="font-heading text-2xl text-center mb-8">Consultations</h2>
  </section>
</template>
<script>
export default {
  name: 'SectionPrendreContact',
}
</script>
