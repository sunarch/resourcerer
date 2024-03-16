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

document.onkeypress = function (e) {
    eh_keypress(e);
}
document.onkeydown = function (e) {
    eh_keydown(e);
}
document.onkeyup = function (e) {
    eh_keyup(e);
}
document.onclick = function (e) {
    eh_click(e);
}
document.ondblclick = function (e) {
    eh_dblclick(e);
}
document.onmousedown = function (e) {
    eh_mousedown(e);
}
document.onmouseup = function (e) {
    eh_mouseup(e);
}
document.onwheel = function (e) {
    eh_wheel(e);
}
