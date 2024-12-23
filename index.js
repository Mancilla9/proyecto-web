function toggleMenu() {
    const navBottons = document.querySelectorAll(".btn-nav");
    // const navCloseBotton=document.querySelector("#btn-close");
    const navMenu = document.querySelector('nav ul');

    navBottons.forEach((element) => {
        element.addEventListener('click', function () {
            // console.log('click');
            // navMenu.classList.add('active');
            navMenu.classList.toggle('active');
        });
    });



    // navCloseBotton.addEventListener('click',function(){
    //     navMenu.classList.toggle('active');
    // });
}

toggleMenu();

async function getServices() {
    const response = await fetch('http://localhost:3000/services');
    const services = await response.json();
    console.log(services);

    services.map(service =>
        createServiceItem(
            service.image,
            service.title,
            service.description,
            "Learn More",
            service.link
        )
    );
}

async function getTestimonials() {
    const response = await fetch('http://localhost:3000/testimonials');
    const testimonials = await response.json();
    // console.log(services);

    testimonials.forEach(function (testimonial) {
        createTestimonialItem(
            testimonial.author,
            testimonial.image,
            testimonial.area,
            testimonial.testimonial
        );
    });
}

async function getFAQs() {
    const response = await fetch('http://localhost:3000/faqs');
    const faqs = await response.json();

    faqs.forEach(function (item) {
        createFAQItem(
            item.question,
            item.answer
        );
    });
}

async function getProjects() {
    const response = await fetch('http://localhost:3000/projects');
    const projects = await response.json();

    projects.forEach(function (item) {
        createProjectItem(
            item.image,
            item.title,
            item.category
        );
    });
}

async function getTeam() {
    const response = await fetch('http://localhost:3000/team');
    const team = await response.json();

    team.forEach(function (item) {
        createTeamItem(
            item.image,
            item.name,
            item.area,
            item.slogan
        );
    });
}

async function getStrategyCards() {
    const response = await fetch('http://localhost:3000/strategyCards');
    const strategyCards = await response.json();

    strategyCards.forEach(function (item) {
        createStrategyCardsItem(
            item.id,
            item.title,
            item.description
        );
    });
}



getServices();
getTestimonials();
getFAQs();
getProjects();
getTeam();
getStrategyCards();


function createStrategyCardsItem(id,title, description) {
    const strategyCardsList = document.querySelector(".strategy-cards-container");
    const strategyCardItem = document.createElement("div");
    strategyCardItem.classList.add("strategy-card");

    const orderItem = document.createElement("div");
    orderItem.classList.add("order");
    orderItem.textContent=`0${id}`;
    strategyCardItem.append(orderItem);

    const infoItem = document.createElement("div");
    infoItem.classList.add("info");

    const infoTitle=document.createElement("h3");
    infoTitle.textContent=title;

    const infoDesciption=document.createElement("p");
    infoDesciption.textContent=description;

    infoItem.append(infoTitle,infoDesciption);
    
    strategyCardItem.append(infoItem);
    strategyCardsList.append(strategyCardItem);

}


function createTeamItem(image, name, area, slogan) {
    const teamList = document.querySelector(".team-list");
    const teamItemContainer = document.createElement("div");
    teamItemContainer.classList.add("team-item");

    const imageElement = document.createElement('img');
    imageElement.setAttribute("src", image);
    teamItemContainer.append(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = name;
    teamItemContainer.append(titleElement);

    const paragraph = document.createElement('p');
    paragraph.textContent = area;
    teamItemContainer.append(paragraph);

    const paragraph2 = document.createElement('p');
    paragraph.textContent = slogan;
    teamItemContainer.append(paragraph2);

    teamList.append(teamItemContainer)
}

function createProjectItem(image, title, category) {
    const projectsList = document.querySelector(".projects-container");
    const projectItemContainer = document.createElement("div");
    projectItemContainer.classList.add("project");

    const imageElement = document.createElement('img');
    imageElement.setAttribute("src", image);
    projectItemContainer.append(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    projectItemContainer.append(titleElement);

    const paragraph = document.createElement('p');
    paragraph.textContent = category;
    projectItemContainer.append(paragraph);

    projectsList.append(projectItemContainer);
}

function createFAQItem(question, answer) {
    const faqsList = document.querySelector(".faqs-list");
    const faqItemContainer = document.createElement("div");
    faqItemContainer.classList.add("faqs-item");

    const faqContainer = document.createElement('details');
    const faqQuestion = document.createElement('summary');
    faqQuestion.textContent = question;
    const faqAnswer = document.createElement('p');
    faqAnswer.textContent = answer;

    faqContainer.append(faqQuestion, faqAnswer);
    faqsList.append(faqContainer);

}

function createServiceItem(imageURL, title, description, linkText, linkHref) {
    // console.log('Creating service');

    const servicesList = document.querySelector(".services-list");
    const serviceItemContainer = document.createElement("div");
    serviceItemContainer.classList.add("service-item");

    const imageElement = document.createElement('img');
    imageElement.setAttribute("src", imageURL);
    serviceItemContainer.append(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    serviceItemContainer.append(titleElement);

    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    serviceItemContainer.append(paragraph);

    const link = document.createElement('a');
    link.textContent = linkText;
    link.setAttribute('href', linkHref);
    serviceItemContainer.append(link);

    servicesList.append(serviceItemContainer);
}

function createTestimonialItem(author, image, area, testimonial) {
    console.log('Creating service');

    const testimonialsList = document.querySelector(".testimonials-list");
    const testimonialsItemContainer = document.createElement("div");
    testimonialsItemContainer.classList.add("testimonial-item");

    const paragraph = document.createElement('p');
    paragraph.textContent = testimonial

    const testimonialAuthorContainer = document.createElement('div');
    testimonialAuthorContainer.classList.add('testimonial-author');

    const testimonialImageContainer = document.createElement('div');
    testimonialImageContainer.classList.add('image');

    const imageElement = document.createElement('img');
    imageElement.setAttribute("src", image);
    testimonialImageContainer.append(imageElement);

    const testimonialBioContainer = document.createElement('div');
    testimonialBioContainer.classList.add('bio');


    const AuthorElement = document.createElement('h3');
    AuthorElement.textContent = author;
    testimonialBioContainer.append(AuthorElement);

    const areaElement = document.createElement('p');
    areaElement.textContent = area;
    testimonialBioContainer.append(areaElement);

    testimonialAuthorContainer.append(
        testimonialImageContainer,
        testimonialBioContainer
    );

    testimonialsItemContainer.append(paragraph, testimonialAuthorContainer);

    testimonialsList.append(testimonialsItemContainer);
}

// createServiceItem();