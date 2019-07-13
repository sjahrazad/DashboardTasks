<style>
.task-main {
	padding: 0;
	position: relative;
	margin: 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-auto-rows: auto;
	grid-gap:30px;}
</style>
<section class="module-intro">
	<h2>MD COLLABS HELP</h2>
	<main id="task-main" class="task-main">
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-users"></i> MD Collabs Users</h3></summary>
				<p>There are three groups of MD Collabs Users:
				<ul>
					<li>MD Collabs Manager</li>
					<li>MD Collabs Owner</li>
					<li>MD Collabs Coworker (Hi <strong><?php echo $user->name; ?></strong>, you are belong to this group)</li>
				</ul>
				</p>
				<p><strong>MD Collabs Coworker</strong>: The user who will be assigned to do the MD Collabs Job in MD Collabs Scheduler.</p>
			</details>
		</div>	
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-list"></i> MD Collabs Types</h3></summary>
				<p>There are three types of MD Collabs available for you:
				<ul>
					<li>MD Collabs Notes</li>
					<li>MD Collabs Scheduler</li>
					<li>MD Collabs Report</li>
				</ul>

				</p>
				<button class="uk-button uk-button-default"><a href="/dashboard/dashboard-tasks/edit/">Add New MD Collabs</a></button>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-eye"></i> MD Collabs Viewer</h3></summary>
				<p>If you create any MD Collabs, the default viewer access is only for you as the MD Collabs creator.</p>
				<p>However, if you want to share your MD Collabs, you can add other users from the Settings section in MD Collabs Editing mode.</p>
				<p><i class="fa fa-lg fa-info"></i> <i>Be carefull not to post a bad thing about your boss, if you shared your MD Collabs.</i> <i class="fa fa-lg fa-smile-o"></i></p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-info-circle"></i> MD Collabs Subject</h3></summary>
				<p>MD Collabs Subject will appear at MD Collabs Dashboard main page.</p>
				<p>If you are sharing your MD Collabs with other users please make your subject KISS, keep it short and simple.</p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-file-text-o"></i> MD Collabs Content</h3></summary>
				<p>MD Collabs Content is the field area where you put your subject's explanation in detail. The maximum character allowed limited up to 1920 characters, it's more than enough.</p>
				<p>Don't write a blog here <i class="fa fa-lg fa-frown-o"></i></p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-hashtag"></i> MD Collabs Title Tag</h3></summary>
				<p>If you add a New MD Collabs the system will create a unique MD Collabs title as a MD Collabs reference number.</p>
				<p>You can add your tag into the title for i.e. version or any free text for additional info.</p>
				<p>MD Collabs Title Tag field is optional not required.</p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-share-square-o"></i> Email Option</h3></summary>
				<p>You can send your MD Collabs Content to the team via Email</p>
				<p>Tick Send Email option and click save.</p>
				<p>The recipients are the selected Users from your MD Collabs Viewer Visibility setting.</p>
				<p>Read more on <strong>MD Collabs Settings</strong> section.</p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-cog"></i> Settings: Priority</h3></summary>
				<p>The default priority is set to Normal</p>
				<p>You can change it if you consider your MD Collabs is High or Low Priority</p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-cog"></i> Settings: Colours</h3></summary>
				<p>Reddish, Orangish and Greenish are colours recommended for MD Collabs Scheduler usage. Red for High Priority, Orange for Normal Priority and Green for Low Priority</p>
				<p>For MD Collabs Notes and Reports type, you are free to use any your favourite colour except the above colours.</p>
				<p><i>Never use purple colour if your boss doesn't like it. You've been warned.</i> <i class="fa fa-lg fa-smile-o"></i></p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-comments"></i> Settings: Replies</h3></summary>
				<p>The default setting is <strong>Yes</strong>. It means you are allowed the selected users respond to your MD Collabs.</p>
				<p>Change to <strong>No </strong> option if you don't want the users respond to your MD Collabs.</p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-cog"></i> Settings: Visibility</h3></summary>
				<p>All MD Collabss Group: all member can read your MD Collabs and they will receive email if you tick the Send Email option.</p>
				<p>Selected Users: Only selected users are able to read your MD Collabs.</p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-cog"></i> Settings: Users Limit</h3></summary>
				<p>Users Limit option will appear once you tick the Selected Users option from Visibility setting.</p>
				<p>Select any user where you want to share your MD Collabs.</p>
				<p><i class="fa fa-lg fa-info"></i> <strong><i>Never remove yourself from the list.</i></strong></p>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-file"></i> Documents</h3></summary>
				<p>If installed you will see a Document tab menu or icon in your heading bar.</p>
				<p>Documents Module is an additional module where you can add File Documents or Photos attached to your MD Collabs.</p>
				<ul>
					<li><i class="fa fa-lg fa-file"></i> PDF Word Excel</li>
					<li><i class="fa fa-lg fa-file-image-o"></i> PNG JPG GIF</li>
				</ul>
			</details>
		</div>
		<div>
			<details>
				<summary><h3><i class="fa fa-lg fa-cogs"></i> Actions</h3></summary>
				<p>Actions menu located at the top right corner of your screen. It will appear if you tick the select option at the top left corner of your MD Collabs window box.</p>
				<p>Be carefull to use this features. You can delete bulk of your MD Collabss once, or just selected windows box.</p>
				<p>If you're using mobile phone, rotate your mobile in horizontal direction to see the Actions drop list and Apply button.</p>
			</details>
		</div>	
	</main>
</section>