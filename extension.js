const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('fost.toggleFormatOnSave', function () {
		const configuration = vscode.workspace.getConfiguration();
		const toggleStatus = !configuration.get('editor.formatOnSave');

		configuration.update(
			'editor.formatOnSave', 
			toggleStatus, 
			vscode.ConfigurationTarget.Global,
			true
		)

		vscode.window.showInformationMessage(`Format on save is ${toggleStatus ? 'ON' : 'OFF' }`);
	});

	const myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	myStatusBarItem.text = 'FOST';
	myStatusBarItem.tooltip = 'Toggle Format On Save';
	myStatusBarItem.command = 'fost.toggleFormatOnSave';
	myStatusBarItem.show();
	

	context.subscriptions.push(disposable);
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
