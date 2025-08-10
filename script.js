/*
 * JavaScript for toggling the contact modal.
 *
 * The contact link in the navigation will open the modal, while the close
 * button and cancel button will close it. If you wish to connect the form
 * submission to a backend service or email provider, add your own handler
 * to the 'submit' event below.
 */

document.addEventListener("DOMContentLoaded", () => {
    const contactLink = document.getElementById("contact-link");
    const modal = document.getElementById("contact-modal");
    const closeBtn = modal.querySelector(".close-btn");
    const cancelBtn = modal.querySelector(".cancel-btn");
    const form = document.getElementById("contact-form");

    // Show the modal when the contact link is clicked
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("active");
    });

    // Close modal on clicking the X icon
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Close modal on clicking the Cancel button
    cancelBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Handle the form submission; currently just closes the modal
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // TODO: integrate with a backend or email service
        alert("Thank you for your message!");
        modal.classList.remove("active");
        form.reset();
    });
});