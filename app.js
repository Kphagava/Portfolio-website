const circle = document.querySelector('.progress-ring__circle');
const ring = document.querySelector('.progress-ring');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

circle.addEventListener('click', function(e) {
    ring.classList.remove('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
})

document.addEventListener('scroll', function(e) {
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    let last_known_scroll_position = window.scrollY;
    let max = scrollHeight - document.documentElement.clientHeight;
    let percentage = (last_known_scroll_position/max)*100;
    
    const isAtStart = percentage === 0; 
    if(!isAtStart) ring.classList.add('active');
    else ring.classList.remove('active');
    
    setProgress(percentage);
});
