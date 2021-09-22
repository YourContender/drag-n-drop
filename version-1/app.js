const item = document.querySelector('.item');
const placeholder = document.querySelectorAll('.placeholder');

placeholder.forEach(elem => {
    elem.addEventListener('dragover', dragover);
    elem.addEventListener('dragenter', dragenter);
    elem.addEventListener('dragleave', dragleave);
    elem.addEventListener('drop', dragdrop);
});

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(e) {
    console.log('dragstart', e.target);
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0)
};

function dragend(e) {
    console.log('dragend');
    e.target.classList.remove('hold', 'hide');
};


function dragover(e) {
    e.preventDefault();
};

function dragenter(e) {
    e.target.classList.add('hovered');
};

function dragleave(e) {
    e.target.classList.remove('hovered')
};

function dragdrop(e) {
    e.target.classList.remove('hovered')
    e.target.append(item);
};