<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>TinyAccordion JavaScript Accordion</title>
<link rel="stylesheet" href="style.css" type="text/css" />
</head>
<body>
<ul class="acc" id="acc">
	<li>
		<h3>The owner</h3>
		<div class="acc-section">
			<div class="acc-content">
				Krtolica Vujadin is software developer from Serbia.<br/>
				He's interested in many things, but mostly the programming, open source, 3D modeling and animations ( in open source Blender3D ), internet technologies, nature, sports ( kayaking ), music ( guitar, flute ) ...<br /><br />
				His email is <a href="mailto:vuja22@yahoo.com">vuja22@yahoo.com</a>, or <a href="mailto:vuja22@gmail.com">vuja22@gmail.com</a>.<br />
				English <b>is not</b> his native language.
			</div>
		</div>
	</li><li>
		<h3>The website</h3>
		<div class="acc-section">
			<div class="acc-content">
				The site is a personal playground for learning and experimenting with jQuery and javascript.<br /><br />				
				It was inspired by <a href="http://qwikioffice.com/">qwikioffice.com.</a><br />
				This site is an attempt to make something like qwikioffice.com but with jQuery (qwikioffice works with Ext JS).<br />
				I want to see how far one can go with DHTML.<br /><br />
				THIS SITE <b>IS NOT</b> COMPATIBLE WITH Internet Explorer !
			</div>
		</div>
	</li>
	<li>
		<h3>jQuery plugins used on this site</h3>
		<div class="acc-section">
			<div class="acc-content">
				A lot of different jQuery plugins is used on this website, along with some 'pure' javascript.<br />
				Below is list of jQuery plugins and custom js libs used on this site:<br /><br />
				<ul class="acc" id="nested">
					<li>
						<h3>jQuery plugins</h3>
						<div class="acc-section">
							<div class="acc-content">
								Donec elementum lobortis lorem. Sed aliquet lacus vitae nibh. Sed ullamcorper pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
					</li>
					<li>
						<h3>'Pure' javascript</h3>
						<div class="acc-section">
							<div class="acc-content">
								Vestibulum blandit mauris elementum mauris.
							</div>
						</div>
					</li>
					<li>
						<h3>My own stuff</h3>
						<div class="acc-section">
							<div class="acc-content">
								I've maid this window system becouse i didn't like jQuery UI. It contains stuff that i didn't need for this system and it looked too big so i've created my own (which became quite big too ;)). It's a mess, and hopefully, i will fix it soon and make a plugin of it available for everyone interested in it.<br />
								However, it depends on few other plugins, so this is more like a framework, rather than a single plugin. It uses jqDragAndResize ( for dragging and resizing ;) ), and few <a href='#'>others</a>.<br />
								I will place the source of the whole framework once i clean up the code.
							</div>
						</div>
					</li>
					<li>
						<h3>Report a bug</h3>
						<div class="acc-section">
							<div class="acc-content">
								You can report a bug you've fond on this site here:
							</div>
						</div>
					</li>
					<li>
						<h3>Contact me</h3>
						<div class="acc-section">
							<div class="acc-content">
								You can contact me by filling these boxes here, and i will answer as soon as posible.
							</div>
						</div>
					</li>
				</ul>				
			</div>			
		</div>
	</li>
</ul>

<script type="text/javascript" src="script.js"></script>

<script type="text/javascript">

var parentAccordion=new TINY.accordion.slider("parentAccordion");
parentAccordion.init("acc","h3",1,-1);

var nestedAccordion=new TINY.accordion.slider("nestedAccordion");
nestedAccordion.init("nested","h3",1,-1,"acc-selected");

</script>

</body>
</html>