function addClimber()
{
	let name = document.querySelector('#climber').value;
	let node = document.createElement('LI');
	let textNode = document.createTextNode(name);
	node.appendChild(textNode);
	document.getElementById('climber_list').appendChild(node);
}