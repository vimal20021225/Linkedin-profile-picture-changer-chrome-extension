function replaceProfilePictures() {
  const newProfilePicURL = chrome.runtime.getURL('download.jpg');
  const profilePicSelectors = [
    'img.EntityPhoto-circle-0',
    'img.EntityPhoto-circle-3',
    'img.global-nav__me-photo',
    'img.EntityPhoto-square-3',
    'img.EntityPhoto-circle-',
    'img.profile-photo-edit__preview',
    'img.EntityPhoto-circle-5',
    'img.EntityPhoto-circle-2',
    'img.ivm-image-view-model__square-img',
    'img.EntityPhoto-square-1',
    'img.EntityPhoto-square-2',
    'img.EntityPhoto-square-0',
    'img.pv-top-card-profile-picture__image--show',
    'img.presence-entity__image',
    'img.EntityPhoto-circle-3-ghost-person',
    'img.da-card-creative__profile-image'
  ];

  profilePicSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(img => {
      if (img.src !== newProfilePicURL) {
        img.src = newProfilePicURL;
      }
    });
  });
}

// Initial replacement of profile pictures
replaceProfilePictures();

// Observe DOM changes to ensure new profile pictures are also replaced
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length > 0) {
      replaceProfilePictures();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });