{% if section.settings.auto_add_gift == true %}
<script>
var simulateClick = function(elem) {
// Create our event (with options)
var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
});
// If cancelled, don't dispatch our event
var canceled = !elem.dispatchEvent(evt);
};
var freeGiftButton = document.querySelector('#freeGift');
simulateClick(freeGiftButton);
</script>
{% endif %}
