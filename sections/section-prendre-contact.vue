<template>
  <section
    id="prendre-contact"
    class="sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10"
  >
    <h2 class="font-heading text-2xl text-center mt-2 mb-4">
      Prendre contact par téléphone
    </h2>
    <a
      href="tel:+41781234567"
      class="rounded-lg bg-c-violet-3 p-3 shadow-md text-gray-100 flex items-center justify-center mx-auto max-w-full w-48"
    >
      <span class="material-icons select-none">phone</span>
      <span class="font-bold ml-4">078 123 45 67</span>
    </a>

    <h2 class="font-heading text-2xl text-center mt-12 mb-4">
      Formulaire de contact
    </h2>

    <form action="" class="flex flex-col mx-2 md:w-160 md:mx-auto">
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Nom"
        type="text"
        name="lastname-input"
        id="lastname-input"
        placeholder="Nom *"
      />
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Prénom"
        type="text"
        name="firstname-input"
        id="firstname-input"
        placeholder="Prénom *"
      />
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Email"
        type="email"
        name="email-input"
        id="email-input"
        placeholder="Email *"
      />
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Téléphone"
        type="tel"
        name="phone-input"
        id="phone-input"
        placeholder="Téléphone"
      />
      <textarea
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Message"
        name="message-input"
        id="message-input"
        rows="10"
        placeholder="Message *"
      ></textarea>
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-4"
        aria-label="Sécurité: quelle lettre apparaît 2 fois dans le logo du site ?"
        type="text"
        name="security-input"
        id="security-input"
        placeholder="Sécurité *: quelle lettre apparaît 2 fois dans le logo du site ?"
      />
      <p>
        <span class="text-gray-600"
          >Les champs marqués d’une * sont requis. </span
        ><br />
        Mme Charmillot prendra contact avec vous aussi tôt que possible.
      </p>

      <button
        class="rounded-lg bg-c-violet-3 p-3 shadow-md text-gray-100 flex items-center justify-center mx-auto max-w-full w-40 select-none mt-4"
        type="submit"
      >
        <span class="material-icons">send</span>
        <span class="font-bold ml-4">Envoyer</span>
      </button>
    </form>

    <h2 class="font-heading text-2xl text-center mt-12 mb-4">Consultations</h2>

    <div class="mx-2 md:w-160 md:mx-auto">
      <p>
        <strong>Consultation sur rdv à Delémont, en matiné ou en soirée</strong
        ><br />
        Dans les locaux du centre de santé sexuelle-planning familial (en dehors
        des heures d’ouverture)<br />
        Tarif préférentiel pour petits budgets
      </p>
      <br />
      <p>
        Centre de santé sexuelle - planning familial Jura<br />
        Rue de la Molière 13<br />
        2800 Delémont
      </p>

      <a
        href="geo:47.36375,7.3481"
        aria-label="Emplacement sur la carte"
        class="bg-gray-400 map-image flex items-end justify-center rounded-lg shadow-md h-100 my-8"
      >
        <div
          class="rounded-lg bg-c-violet-3 p-3 mb-8 shadow-lg text-gray-100 flex items-center justify-center max-w-full w-48 select-none"
        >
          <span class="material-icons">directions</span>
          <span class="font-bold ml-4">Ouvrir la carte</span>
        </div>
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionPrendreContact',
}
</script>
