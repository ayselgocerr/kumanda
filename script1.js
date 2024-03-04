const controls = document.querySelectorAll('[id^="control"]');
/*CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize izin veren iki modern JavaScript
 yönteminden biridir. Bu yöntem ile hem css class'larını hem de id'lerini kullanabilirsiniz.*/
const hiddenDivs = document.querySelectorAll('.hidden-div');

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    // Hide all hidden divs
    hiddenDivs.forEach(div => div.style.display = 'none');

    // Find the corresponding hidden div element based on the index
    const hiddenDiv = hiddenDivs[index];

    // Show the corresponding hidden div element
    hiddenDiv.style.display = 'block';
  });
});