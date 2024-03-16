// resourcerer - a resource management game
// Copyright (C) 2024  András Németh
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, version 3 of the License only.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

const canvas_id = 'r-canvas';

/* global settings */
let canvas_margin = 10;


function canvas_get() {
    return document.getElementById(canvas_id)
}

function canvas_get_context() {
    const canvas = canvas_get();
    return canvas.getContext('2d');
}


function canvas_clear(context) {
    const canvas = canvas_get();
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function canvas_resize(h_margin = 0) {
    const canvas = canvas_get();

    const total_margin = 2 * canvas_margin;

    const width = window.innerWidth - total_margin - (2 * h_margin);
    canvas.style.width = width + 'px';
    canvas.width = width;

    const height = window.innerHeight - total_margin;
    canvas.style.height = height + 'px';
    canvas.height = height;
    
    // horizontal margins to offset hex col leftover on the side
    canvas.style.marginLeft = h_margin + 'px';
    canvas.style.marginRight = h_margin + 'px';
}
