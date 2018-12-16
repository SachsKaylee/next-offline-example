
// This will output "/_next/static/subfolder/test.txt" to the console, even though test.txt 
// is located at /static/subfolder/test.txt

// This seems to be related to using `generateSw: false`.

console.log("I am the service worker", self.__precacheManifest);
