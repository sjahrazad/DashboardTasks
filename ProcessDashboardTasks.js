/**
 *
 * Javascript file for PW Module ProcessDashboardTasks.
 *
 * @author Francis Otieno (Kongondo) <kongondo@gmail.com>
 *
 * https://github.com/kongondo/ProcessDashboardTasks
 * Created February 2019.
 *
 */

function ProcessDashboardTasks($) {

	/*************************************************************/
	// SCRIPT GLOBAL VARIABLES

	/*	@task:
		- global variables NOT prefixed with '$'.
		- function parameters and variables PREFIXED with '$'
	*/

	var jsDashboardTasksConfigs, colourPickerDefaultBackgroundColour, colourPickerSave, colourPickerClear, parent;

	// grab values for some variables
	jsDashboardTasksConfigs = ProcessDashboardTasksConfigs();

    /*************************************************************/
	// FUNCTIONS

	/**
	 * Get the configs sent by the module ProcessDashboardTasks.
	 *
	 * We use these mainly for our custom notices function.
	 *
	 * @return Object|false jsDashboardTasksConfigs Return configurations if found, else false.
	 *
	*/
	function ProcessDashboardTasksConfigs(){
		// ProcessDashboardTasks configs
		var jsDashboardTasksConfigs = config.ProcessDashboardTasks;
		if (!jQuery.isEmptyObject(jsDashboardTasksConfigs)) return jsDashboardTasksConfigs;
		else return false;
	}

	/**
	 * Show or Hide bulk actions button depending on whether tasks selected.
	 *
	 */
	function showHideActionsPanel() {

		var $actionButton;
		var $items;

		// modal thumbs view: check if any tasks checkboxes are cheched
		$items = parent.find('input.dn_task_check:checked').first();
		//$actionButton = $('button#dn_actions_btn_copy, button#dn_actions_btn');
		$actionButton = $('button#dn_actions_btn_copy');

		// if current selections, show actions button
		if ($items.length) $actionButton.removeClass('dn_hide').fadeIn('slow');
		// else hide actions burron
		else $actionButton.fadeOut('slow').addClass('dn_hide');

	}

	/**
	 * Updates outer class of item to match that of its "delete" checkbox
	 *
	 * @task: originally from InputfieldImage.js updateDeleteClass().
	 *
	 * @param $checkbox
	 *
	 */
	function updateSelectClass($checkbox) {
		if($checkbox.is(":checked")) {
			$checkbox.parents('.dn_task').addClass("gridTask--select");
		} else {
			$checkbox.parents('.dn_task').removeClass("gridTask--select");
		}
	}

	/**
	 * Set checked states for selected tasks.
	 *
	 * Listens to clicks, double clicks and shift clicks in tasks selection.
	 * Double click will select all tasks.
	 * Shift click selects tasks within a range (start - end).
	 *
	 * @param Object $selected The selected element.
	 * @param Event e A Javascript click event.
	 *
	 */
	function tasksSelection($selected, e) {

		parent = $selected.parents('div#dn_tasks_container');
		var $label = $selected.parent('label');
		var $input = $label.find("input");
		$input.prop("checked", inverseState).change();

		if (e.type == "dblclick") {
			setSelectedStateOnAllItems($input);
			e.preventDefault();
			e.stopPropagation();
		}

		if ($input.is(":checked")) {
			var $prevChecked = $('input#dn_previous_selected_task');
			var $prevCheckedID = $prevChecked.val();
			// shift select @todo: do we really need these?
			if (e.shiftKey) {
				//e.preventDefault();
				preventNormalShiftSelection();
				// @task: prevent shift select of other text; works but there's quick flash of other selection first
				initShiftSelectCheckboxes($prevCheckedID, $input);
			}
			// change value of previous select to current selected
			$prevChecked.val($input.attr('id'));
		}

	}

	/**
	 * Prevent selection of other text when using shift-select tasks range.
	 */
	function preventNormalShiftSelection() {
		document.getSelection().removeAllRanges();
		/*
		window.onload = function() {
			document.onselectstart = function() {
				return false;
			}
		}
		*/
	}

	/**
	 * Implement shift+click to select range of checkboxes
	 *
	 * @param string $previousChkboxID The ID of the previously selected checkbox.
	 * @param object $currentChkbox The currently selected checkbox.
	 *
	 */
	function initShiftSelectCheckboxes($previousChkboxID, $currentChkbox) {

		var $parent = $("div#dn_tasks_container");
		var $tasksThumbChkboxes = $parent.find("input[type='checkbox'].dn_task_check");
		var $start = $tasksThumbChkboxes.index($currentChkbox);
		var $previousChkbox = $parent.find('input#' + $previousChkboxID);
		var $end = $tasksThumbChkboxes.index($previousChkbox);
		var $shiftChecked = $tasksThumbChkboxes.slice(Math.min($start, $end), Math.max($start, $end) + 1);

		$shiftChecked.each(function () {
			 // skip start and end (already checked)
			if ($(this).is(":checked")) return;
			$(this).parent('label').find("span.dn_select").click();
		});

	}

	/**
	 * Helper function for inversing state of checkboxes
	 *
	 * @task: originally from InputfieldImage.js.
	 *
	 * @param index
	 * @param old
	 * @returns {boolean}
	 *
	 */
	function inverseState($index, $old) {
		return !$old;
	}

	/**
	 * Sets the checkbox delete state of all items to have the same as that of $input
	 *
	 * @task: originally from InputfieldImage.js.
	 *
	 * @param $input
	 *
	 */
	function setSelectedStateOnAllItems($input) {
		// @task: original function name setDeleteStateOnAllItems
		var $checked = $input.is(":checked");
		var $items = parent.find('.dn_tasks_grid').find('.gridTask__selectbox');
		if ($checked) $items.prop("checked", "checked").change();
		else $items.removeAttr("checked").change();
	}

	/**
	 *
	 * @param integer $commentParentID The ID of the parent of the intended response to the existing response.
	 * @param object $parent The <article> element that is the parent of the click reply <a>.
	 */
	function cloneResponseToResponseMarkup($commentParentID, $parent) {

		var $form = $parent.find("div.dn_response_inputs_wrapper");
		// if form already cloned and attached, slide toggle it and return
		if ($form.length) {
			$form.slideToggle( "slow" );
			return;
		}

		// clone the hidden div with the template inputs (textarea and input hidden)
		var $templateResponse = $("div#dn_task_responses_template").clone();
		// change their attributes (IDs, values, names, as applicable)
		$templateResponse.attr("id", "dn_response_inputs_wrapper_" + $commentParentID);
		$templateResponse.addClass("dn_response_inputs_wrapper");
		$templateResponse.hide();
		// textarea
		var $responseText = $templateResponse.find("textarea#dn_response_text_template");
		$responseText.attr('id', "dn_response_text_" + $commentParentID);
		$responseText.attr('name', "dn_response_text[]");
		// input hidden
		var $responseParentID = $templateResponse.find("input#dn_response_parent_id_template");
		$responseParentID.attr('id', "dn_response_parent_id_" + $commentParentID);
		$responseParentID.attr('name', "dn_response_parent_id[]");
		$responseParentID.val($commentParentID);
		// response button (@task: submits whole form as well!)
		var $responseButton = $templateResponse.find("button#dn_response_reply_btn_template");
		$responseButton.attr('id', "dn_response_reply_btn_" + $commentParentID);
		$responseButton.addClass("dn_response_reply_btn");
		// append to <article></article>
		$parent.append($templateResponse).find('.dn_response_inputs_wrapper').slideDown("slow");


	}

	/**
	 * Initialise Pickr.
	 *
	 * @param object $targetElement Element which will be replaced with the actual color-picker.
	 *
	 */
	function initColourPicker($targetElement) {

		if (jsDashboardTasksConfigs) {
			colourPickerDefaultTextColour = jsDashboardTasksConfigs.config.colourPickerDefaultTextColour;
			colourPickerDefaultBackgroundColour = jsDashboardTasksConfigs.config.colourPickerDefaultBackgroundColour;
			colourPickerSave = jsDashboardTasksConfigs.config.colourPickerSave;
			colourPickerClear = jsDashboardTasksConfigs.config.colourPickerClear;
		}

		var $el, $defaultColour, $colourType, $colourValueElement;

		$el = "#" + $targetElement.attr('id');
		$colourType = $targetElement.attr('data-colour-type');
		$colourValueElement = "#" + $targetElement.attr('data-colour');
		$defaultColour = $colourType == "text" ? colourPickerDefaultTextColour : colourPickerDefaultBackgroundColour;


		// @see optional options for more configuration.
		const pickr = Pickr.create({
			el: $el,
			// default color
			default: (0 == $defaultColour ? null : $defaultColour),
			defaultRepresentation: 'RGBA',
			components: {
				// Main components
				preview: true,
				opacity: true,
				hue: true,
				// Input / output Options
				interaction: {
					hex: false,
					rgba: false,
					hsla: false,
					hsva: false,
					cmyk: false,
					input: false,
					clear: true,
					save: true
				},
			},
			// @todo: make configurable in future??
			swatches: [
				'#F44336',
				'#E91E63',
				'#9C27B0',
				'#673AB7',
				'#3F51B5',
				'#2196F3',
				'#03A9F4',
				'#00BCD4',
				'#009688',
				'#4CAF50',
				'#8BC34A',
				'#CDDC39',
				'#FFEB3B',
				'#FFC107'
			],

			// Translated Button labels strings
			strings: {
				save: colourPickerSave,  // save button
				clear: colourPickerClear // clear button
			}
		});

		// stop swatches buttons from firing
		pickr.on('init', (p) => {
			$("div.swatches button").click(function (e) {
				e.preventDefault();
				//e.stopPropagation();
			});
		}).on('save', (hsva) => {
			// converts the object to an rgba array.
			//var rgba = hsva.toRGBA()
			var $updateElement = $('input' + $colourValueElement);
			if (hsva) {
				var rgbaString = hsva.toRGBA().toString(); // returns rgba(r, g, b, a)
				// save the selected color to the hidden input for task background colour
				$updateElement.val(rgbaString);
			}
			// no background colour, so set to 0
			else $updateElement.val(0);
		});

	}

	/**
	 * Initialise this script.
	 *
	 */
	function init() {

		// initialise colour pickers (for background and text colours)
		if (typeof Pickr !== 'undefined') {
			$('div.dn_colour_picker').each(function(){
				var $targetElement = $(this);
				initColourPicker($targetElement)
			});
		}

		// change of "delete/selected" status for an item event
		$(document).on("change", ".gridTask__selectbox", function () {
			updateSelectClass($(this));
			// all tasks parent wrapper
			parent = $(this).parents('div#dn_tasks_container');
			showHideActionsPanel();
		});

		// click or double click select/trash event
		// @task: was 'gridTask__trash' in original
		//$(document).on('click dblclick', '.gridTask__icon', function (e) {
		$(document).on('click dblclick', '.dn_select', function (e) {
			e.preventDefault();
			e.stopPropagation();
			tasksSelection($(this),e);
		});

		// add form to respond to an existing response to a task
		$('ul#dn_threaded_comments_main').on('click', 'a.dn_task_comment_action_reply', function (e) {
			e.preventDefault();
			e.stopPropagation();
			var $commentParentID = $(this).attr('data-comment-id');
			var $parent = $(this).parents('article.dn_response_wrapper');
			cloneResponseToResponseMarkup($commentParentID, $parent)
		});



	}

	// initialise script
	init();

}// END ProcessDashboardTasks()


/*************************************************************/
// READY

jQuery(document).ready(function($) {
	ProcessDashboardTasks($);
});