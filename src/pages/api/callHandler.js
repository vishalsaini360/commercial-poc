const handler = require('./DownloadFiles.js');
const directoryRequests = [];
// Function to generate directory request
function generateDirectoryRequest(directory, selectedFiles, parentDir, childDir) {
  directoryRequests.push({
    directory,
    request: {
      body: {
        selectedFiles,
        parentDir,
        childDir
      }
    }
  });
}


for (let i = 1; i <= 5; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'BenefitBanner');
}
for (let i = 1; i <= 5; i++) {
  let arr=[`Option${i}.js`]
  if(i==2){
    arr.push('Gallery.js')
  }
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'EnquiryForm');
}
for (let i = 1; i <= 4; i++) {
  let arr=[`Option${i}.js`]
  arr.push('NextArrow.js', 'PreviousArrow.js', 'HeaderBanner.module.css')
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'HeaderBanner');
}
for (let i = 1; i <= 4; i++) {
  let arr=[`Option${i}.js`]
  if(i==2 || i==4){
    arr.push('NewsArticles.module.css')
  }
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'NewsArticles');
}
for (let i = 1; i <= 4; i++) {
  let arr=[`Option${i}.js`]
  if(i==2){
    arr.push('Gallery.js')
  }
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'ProductRange');
}


for (let i = 1; i <= 4; i++) {
  let arr=[`Option${i}.js`]
  arr.push(`ActionBox${i}.js`)
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'QuickAction');
}

for (let i = 1; i <= 2; i++) {
  let arr=[`Option${i}.js`]
  arr.push('SocialMediaCard.js')
  if(i==2){
    arr.push('FilterButton.js')
  }
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'SocialMedia');
}

for (let i = 1; i <= 5; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'Testimonial');
}

for (let i = 1; i <= 5; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('Homepage', arr, 'Homepage', 'WhoWeAre');
}
for (let i = 1; i <= 3; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('PoductPage', arr, 'PoductPage', 'FeaturesEngine');
}
for (let i = 1; i <= 3; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('PoductPage', arr, 'PoductPage', 'FeaturesEnginePower');
}
for (let i = 1; i <= 3; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('PoductPage', arr, 'PoductPage', 'FeaturesSections');
}
for (let i = 1; i <= 4; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('PoductPage', arr, 'PoductPage', 'ImageGalley');
}

for (let i = 1; i <= 3; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('PoductPage', arr, 'PoductPage', 'ProductConfigration');
}
for (let i = 1; i <= 5; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('PoductPage', arr, 'PoductPage', 'ProductPageBanner');
}
for (let i = 1; i <= 2; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('AboutUsPage', arr, 'AboutUsPage', 'Awards');
}
for (let i = 1; i <= 2; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('AboutUsPage', arr, 'AboutUsPage', 'CoreValue');
}
for (let i = 1; i <= 2; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('AboutUsPage', arr, 'AboutUsPage', 'Journey');
}
for (let i = 1; i <= 2; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('AboutUsPage', arr, 'AboutUsPage', 'MissionVision');
}

for (let i = 1; i <= 2; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('EasyOfFinance', arr, 'EasyOfFinance', 'EasyOfFinance');
}
for (let i = 1; i <= 2; i++) {
  let arr=[`Option${i}.js`]
  generateDirectoryRequest('EasyOfFinance', arr, 'EasyOfFinance', 'PressRelease');
}
for (let i = 1; i <= 3; i++) {
  let arr=[`Option${i}.js`]
  arr.push('FilterButton.js')
  arr.push('FilterCard.js')
  generateDirectoryRequest('Gallery', arr, 'Gallery', '');
}

// Define the directories and their corresponding requests
/*
directoryRequests structure will be like this....
const directoryRequests = [
  {
    directory: 'Homepage',
    request: {
      body: {
        selectedFiles: ['Option1.js','Gallery.js','GalleryThumbnail.js','NextArrow.js','PreviousArrow.js','HeaderBanner.module.css'],
        parentDir: 'Homepage',
        childDir: 'HeaderBanner'
      }
    }
  },
  {
    directory: 'Homepage',
    request: {
      body: {
        selectedFiles: ['Option2.js','Gallery.js','GalleryThumbnail.js','NextArrow.js','PreviousArrow.js','HeaderBanner.module.css'],
        parentDir: 'Homepage',
        childDir: 'HeaderBanner'
      }
    }
  },
  {
    directory: 'PoductPage',
    request: {
      body: {
        selectedFiles: ['Option1.js', 'Option2.js','Option3.js'],
        parentDir: 'PoductPage',
        childDir: 'FeaturesEngine'
      }
    }
  },
  // Add more directory requests as needed
];
*/

// Iterate over the directoryRequests array
directoryRequests.forEach(({ directory, request }) => {
  // Create a mock response object with necessary methods
  const res = {
    statusCode: 200,
    headers: {},
    setHeader: function (name, value) {
      this.headers[name] = value;
    },
    end: function (data) {
      console.log(data);
    },
    status: function (code) {
      this.statusCode = code;
      return this; // Return itself for method chaining
    },
    json: function (data) {
      this.setHeader('Content-Type', 'application/json');
      this.end(JSON.stringify(data));
    }
  };

  // Call the handler function with the current request
  console.log(`Sending request for directory: ${directory}`);
  handler(request, res);
});
