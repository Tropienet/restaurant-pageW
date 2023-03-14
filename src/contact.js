function loadContactInfo() {
    const pageContainer = document.querySelector(".page-container")

    const contactInfo = document.createElement("div");

    contactInfo.classList.add("contact-page")

    const phoneNumberContainer = document.createElement("div");
    const mailAddressContainer = document.createElement("div");
    const emailContainer = document.createElement("div");

    phoneNumberContainer.classList.add("contact-info");
    mailAddressContainer.classList.add("contact-info");
    emailContainer.classList.add("contact-info");

    const phoneNumberLabel = document.createElement("p");
    const mailAddressLabel = document.createElement("p");
    const emailLabel = document.createElement("p");

    phoneNumberLabel.textContent = "Phone";
    mailAddressLabel.textContent = "Mail";
    emailLabel.textContent = "Email";

    const phoneNumber = document.createElement("p");
    const mailAddress = document.createElement("p");
    const email = document.createElement("p");

    phoneNumber.textContent = "877-547-PAPA";
    mailAddress.textContent = "P.O. Box 99900";
    email.textContent = "papajohns@papa.com"

    phoneNumberContainer.appendChild(phoneNumberLabel);
    phoneNumberContainer.appendChild(phoneNumber);
    mailAddressContainer.appendChild(mailAddressLabel);
    mailAddressContainer.appendChild(mailAddress);
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(email);

    contactInfo.appendChild(phoneNumberContainer);
    contactInfo.appendChild(mailAddressContainer);
    contactInfo.appendChild(emailContainer);

    pageContainer.appendChild(contactInfo);
}

export default loadContactInfo;