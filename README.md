<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modify LinkedIn Profile Pictures - README</title>
</head>
<body>
    <h1>Modify LinkedIn Profile Pictures</h1>
    <p>This Chrome extension dynamically modifies profile pictures on the LinkedIn homepage. It replaces the existing profile pictures with a specified image.</p>

    <h2>Features</h2>
    <ul>
        <li>Automatically replaces LinkedIn profile pictures with a custom image.</li>
        <li>Monitors DOM changes to ensure new profile pictures are also replaced dynamically.</li>
        <li>Easy to install and use.</li>
    </ul>

    <h2>Installation</h2>
    <ol>
        <li>Clone this repository or download the ZIP file.
            <pre><code>git clone https://github.com/your-username/modify-linkedin-profile-pictures.git
cd modify-linkedin-profile-pictures
            </code></pre>
        </li>
        <li>Open Google Chrome and navigate to <code>chrome://extensions/</code>.</li>
        <li>Enable "Developer mode" by toggling the switch in the top right corner.</li>
        <li>Click on "Load unpacked" and select the directory where you cloned or extracted this repository.</li>
        <li>The extension should now be installed and active.</li>
    </ol>

    <h2>Usage</h2>
    <ol>
        <li>Ensure the extension is installed and active in your Chrome browser.</li>
        <li>Navigate to LinkedIn (<code>https://www.linkedin.com/</code>).</li>
        <li>The extension will automatically replace profile pictures with the specified image (<code>download.jpg</code>).</li>
    </ol>

    <h2>How It Works</h2>
    <p>
        <ul>
            <li>The extension uses a content script (<code>content.js</code>) that is injected into LinkedIn pages.</li>
            <li>The content script selects profile pictures based on a predefined set of CSS selectors.</li>
            <li>The script dynamically replaces the <code>src</code> attribute of these profile pictures with the URL of a custom image (<code>download.jpg</code>).</li>
            <li>A <code>MutationObserver</code> monitors the DOM for any changes and ensures new profile pictures are also replaced.</li>
        </ul>
    </p>

    <h2>Files</h2>
    <ul>
        <li><code>manifest.json</code>: Defines the extension's metadata, permissions, content scripts, icons, and web accessible resources.</li>
        <li><code>content.js</code>: Contains the JavaScript code that replaces LinkedIn profile pictures.</li>
        <li><code>download.jpg</code>: The custom image that will replace the LinkedIn profile pictures.</li>
        <li><code>Linkedin.png</code>: Icon image used for the extension.</li>
    </ul>

    <h2>Contributing</h2>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch (<code>git checkout -b feature-branch</code>).</li>
        <li>Make your changes.</li>
        <li>Commit your changes (<code>git commit -am 'Add new feature'</code>).</li>
        <li>Push to the branch (<code>git push origin feature-branch</code>).</li>
        <li>Create a new Pull Request.</li>
    </ol>

    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

    <h2>Contact</h2>
    <p>For any questions or suggestions, please open an issue or contact <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>
</body>
</html>
