const colorScheme = document.getElementById(`color-scheme`);

colorScheme.addEventListener(`click`, () =>
{
    if (colorScheme.getAttribute(`aria-pressed`) === `false`) {
        colorScheme.setAttribute(`aria-pressed`, `true`);

        colorScheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><title>Dark mode</title><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`;

        document.body.style.background = `var(--clr-bg-ligth)`;
        document.body.style.color = `black`;
    } else {
        colorScheme.setAttribute(`aria-pressed`, `false`);

        colorScheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><title>Light Mode</title><path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>`;

        document.body.style.background = `var(--clr-bg)`;
        document.body.style.color = `white`;
    }
});


const translations = {
    en: {
        pageTitle:        `Responsive accessible web form`,
        h1:               `Responsive accessible web form`,
        legendPersonal:   `Personal Information`,
        labelFirstName:   `First name:`,
        labelLastName:    `Last name:`,
        labelEmail:       `Email:`,
        labelTel:         `Phone number:`,
        legendQuestionnaire: `Questionnaire`,
        legendLiarParadox:   `This sentence is false.`,
        labelTrue:        `True`,
        labelFalse:       `False`,
        labelBoth:        `Both`,
        labelOther:       `Other (clarify)`,
        pickAnimal:       `Pick an animal:`,
        optionDefault:    `Please choose from the options:`,
        optionFrog:       `Frog`,
        optionChameleon:       `Chameleon`,
        optionAxolotl:    `Axolotl`,
        optionCar:        `Car`,
        labelColor:       `Pick a color:`,
        labelRating:      `Please rate our service from 1 to 10:`,
        privacyLink:      `Privacy Policy`,
        privacyLabel:     `I hereby accept the preceding privacy policy:`,
        buttonSubmit:        `Submit`,
        buttonReset:         `Reset`,
        buttonFill:         `Fill`,
        langButtonText:      `cs`,
        langButtonAriaLabel: `Změnit jazyk na češtinu. Switch language to Czech.`,
        dialogAriaLabel: `Submission successful.`,
        dialogButtonAriaLabel: `Close this dialog and go back to the sent form.`,
        dialogP: `Congratulations!`,
        dialogPTwo: `You've successfully submitted the form.`
    },
    cs: {
        pageTitle:        `Responzivní přístupný webový formulář`,
        h1:               `Responzivní přístupný webový formulář`,
        legendPersonal:   `Osobní údaje`,
        labelFirstName:   `Jméno:`,
        labelLastName:    `Příjmení:`,
        labelEmail:       `E-mail:`,
        labelTel:         `Telefonní číslo:`,
        legendQuestionnaire: `Dotazník`,
        legendLiarParadox:   `Tato věta je nepravdivá.`,
        labelTrue:        `Pravda`,
        labelFalse:       `Nepravda`,
        labelBoth:        `Obojí`,
        labelOther:       `Jiné (upřesněte)`,
        pickAnimal:       `Vyberte zvíře:`,
        optionDefault:    `Vyberte z možností:`,
        optionFrog:       `Žába`,
        optionChameleon:    `Chameleon`,
        optionAxolotl:    `Axolotl`,
        optionCar:        `Auto`,
        labelColor:       `Vyberte barvu:`,
        labelRating:      `Ohodnoťte naše služby od 1 do 10:`,
        privacyLink:      `Zásady ochrany osobních údajů`,
        privacyLabel:     `Tímto přijímám výše uvedené zásady ochrany osobních údajů:`,
        buttonSubmit:        `Odeslat`,
        buttonReset:         `Resetovat`,
        buttonFill:         `Vyplnit`,
        langButtonText:      `en`,
        langButtonAriaLabel: `Switch language to English. Změnit jazyk na angličtinu.`,
        dialogAriaLabel: `Odeslání úspěšné.`,
        dialogButtonAriaLabel: `Zavřete toto dialogové okno a vraťte se k odeslanému formuláři.`,
        dialogP: `Gratulujeme!`,
        dialogPTwo: `Úspěšně jste odeslali formulář.`
    }
};


function applyLanguage(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    document.querySelector('h1').textContent = t.h1;
    document.querySelector('form > fieldset:first-of-type > legend').textContent = t.legendPersonal;
    document.querySelector('fieldset.questionnaire > legend').textContent = t.legendQuestionnaire;
    document.querySelector('fieldset.radio > legend').textContent = t.legendLiarParadox;

    document.querySelector('label[for="first-name"]').textContent = t.labelFirstName;
    document.querySelector('label[for="last-name"]').textContent  = t.labelLastName;
    document.querySelector('label[for="email"]').textContent      = t.labelEmail;
    document.querySelector('label[for="tel"]').textContent        = t.labelTel;
    document.querySelector('label[for="true"]').textContent       = t.labelTrue;
    document.querySelector('label[for="false"]').textContent      = t.labelFalse;
    document.querySelector('label[for="both"]').textContent       = t.labelBoth;
    document.querySelector('label[for="other"]').textContent      = t.labelOther;
    document.querySelector('label[for="color"]').textContent      = t.labelColor;
    document.querySelector('label[for="form-rating"]').textContent = t.labelRating;

    document.querySelector('.questionnaire p').textContent = t.pickAnimal;

    document.querySelector('select option[value=""]').textContent        = t.optionDefault;
    document.querySelector('select option[value="frog"]').textContent    = t.optionFrog;
    document.querySelector('select option[value="chameleon"]').textContent    = t.optionChameleon;
    document.querySelector('select option[value="axolotl"]').textContent = t.optionAxolotl;
    document.querySelector('select option[value="car"]').textContent     = t.optionCar;

    document.querySelector('.terms a').textContent     = t.privacyLink;
    document.querySelector('.terms label').textContent = t.privacyLabel;
    document.querySelector('input[name="PS"]').setAttribute('aria-label', t.privacyLabel);

    document.querySelector('form button:not([type="reset"]):not([type="button"])').textContent = t.buttonSubmit;
    document.querySelector('form button[type="reset"]').textContent  = t.buttonReset;
    document.querySelector('form button[type="button"]').textContent  = t.buttonFill;

    document.querySelector(`dialog`).setAttribute(`aria-label`, t.dialogAriaLabel);
    document.querySelector(`dialog button`).setAttribute(`aria-label`, t.dialogButtonAriaLabel);
    document.querySelector(`dialog p:last-of-type`).textContent = t.dialogP;
    document.querySelector(`dialog p:first-of-type`).textContent = t.dialogPTwo;

    const langButton = document.getElementById('language');
    langButton.textContent = t.langButtonText;
    langButton.setAttribute('aria-label', t.langButtonAriaLabel);
    langButton.setAttribute('aria-pressed', lang === 'cs');
}

const languageButton = document.getElementById(`language`);
let currentLang = `en`;

languageButton.addEventListener(`click`, () =>
{
    if (languageButton.getAttribute(`aria-pressed`) === `false`) {
        languageButton.setAttribute(`aria-pressed`, `true`);
        
        applyLanguage(`cs`);
        currentLang = `cs`;
    } else {
        languageButton.setAttribute(`aria-pressed`, `false`);

        applyLanguage(`en`);
        currentLang = `en`;
    }
});

const radio = document.querySelector(`.radio`);
const textarea = document.getElementById(`lier-paradox-textarea`);

radio.addEventListener(`input`, e => {
    if (e.target.type !== `radio`) {
        return;
    }

    textarea.hidden = e.target.value !== `other`;
});

const closeDialogButton = document.querySelector(`dialog button`);

closeDialogButton.addEventListener(`click`, () =>
{
    dialog.classList.remove(`grid`);
    dialog.close();
});

function populateForm() {
    document.getElementById(`first-name`).value = `John`;
    document.getElementById(`last-name`).value  = `Doe`;
    document.getElementById(`email`).value = `john.doe@example.com`;
    document.getElementById(`tel`).value = `+420 123 456 789`;
    
    document.getElementById(`other`).checked = true;
    document.getElementById(`lier-paradox-textarea`).hidden = false;
    document.getElementById(`lier-paradox-textarea`).value = `More false then true, because it's a lie, and it depends whether it's raining.`;
    
    document.querySelector(`select`).value = `car`;
    
    document.getElementById(`color`).value = `#00FFBB`;
    document.getElementById(`form-rating`).value = `7`;
    
    document.querySelector(`input[name="PS"]`).checked = true;
}

const fillButton = document.querySelector(`form ul button[type="button"]`);

fillButton.addEventListener(`click`, populateForm);

const animal = document.getElementById(`pick-an-animal`);

animal.addEventListener(`change`, () => {
    animal.setCustomValidity(``);
});

const form = document.querySelector(`form`);
const dialog = document.querySelector(`dialog`);

form.addEventListener(`submit`, e => {
    e.preventDefault();

    if (animal.value === `car`) {
        if (currentLang === `en`) {
            animal.setCustomValidity(`Please, pick an animal.`);
        } else {
            animal.setCustomValidity(`Prosím, vyberte zvíře.`);
        }
        animal.reportValidity();
        animal.selectedIndex = 0;
        return;
    }

    const img = document.querySelector(`dialog img`);

    if (currentLang === `cs`) {
        if (animal.value === `frog`) {
            img.setAttribute(`src`, `./photos/frog.webp`);
            img.setAttribute(`alt`, `Žába zobrazená z boku, dívající se do dálky, sedící na něčem, co vypadá jako větev nebo zrezivělá ocelová tyč.`);
        } else if (animal.value === `chameleon`) {
            img.setAttribute(`src`, `./photos/chameleon.webp`);
            img.setAttribute(`alt`, `Zelený chamelon šplhající po větvi.`);
        } else if (animal.value === `axolotl`) {
            img.setAttribute(`src`, `./photos/axolotl.webp`);
            img.setAttribute(`alt`, `Růžový axolotl v aquárium.`);
        }
    } else {
        if (animal.value === `frog`) {
            img.setAttribute(`src`, `./photos/frog.webp`);
            img.setAttribute(`alt`, `Frog displayed from the side, looking into distance, sitting on what looks like a branch or a rusted steel rod.`);
        } else if (animal.value === `chameleon`) {
            img.setAttribute(`src`, `./photos/chameleon.webp`);
            img.setAttribute(`alt`, `Green chameleon climbing along a branch.`);
        } else if (animal.value === `axolotl`) {
            img.setAttribute(`src`, `./photos/axolotl.webp`);
            img.setAttribute(`alt`, `Pink axolotl in an aquarium.`);
        }
    }

    dialog.showModal();
    dialog.classList.add(`grid`);
});