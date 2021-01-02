# 5-a-side Football Team Generator

Welcome! Here you'll find my 5-a-side football team generator, which I created from scratch in just under a week as the final technical challenge for the DevelopMe Full Stack Developer course. 

Check out the finished page here (https://nelboh.github.io/technical-challenge/), or stick around and take a look at the code from here.

Feel free to use it for something other than football if you want to, like determining who gets to take the lift and who has to take the stairs. 


## How to use the generator

### Team Settings 

In Team Settings, you can choose a name and a kit colour for each team. 

Any names input here or in the player name fields will be truncated if they're longer than 16 characters.

If you leave the name inputs blank, you'll get a friendly error message. Pushing blank inputs through anyway will give you default team names (Team One and Team Two). 

If you type the same name for both teams (why would you do that), you'll get another friendly error message but it won't stop you pushing it through.

You'll also get a friendly error message if you try to give both teams the same kit colour. Please note that there is currently a minor bug with the kit colour error message, but it will go away by itself (see Known Issues below for further details).

### Enter Players 

In Enter Players, you can input ten player names of your choice. If you choose to leave them as-is, they'll render in the final teams listing as Player 1, Player 2, etc. 

If you enter a player name and then remove it (i.e. submit a blank input field), the team lists will render with a placeholder name instead. 

### Reset button

As its name suggests, this will reset everything you've entered and put it back to its default value. 

### Generate Teams

If you're happy with your team names, kit colours, and player names, press this button to advance to the next page. It'll randomly shuffle and divide your list of ten names into two teams of five.

### Team listings

You'll see your input team names at the top (Team One vs. Team Two), and also at the top of each individual team component. You'll also see your randomly shuffled player names assigned to a team, and the team's chosen kit colour too.

### Reshuffle button

In the event that you don't like your team lineups, you can hit Reshuffle to run the team sorting logic again as many times as you please. Your team names and kit colours will remain unchanged. 

### Settings button

Click this button to return to the Settings page. Your input data will still be there as long as you don't refresh or close the browser. You can reset everything back to default with the Reset button.

## Behind the scenes

If you're interested in seeing the project brief and my subsequent plan of attack, you can check out my project plan here: https://docs.google.com/document/d/11519r9Vn1FxRt2UolZCPWoS5qxew4uZE3nQrNOGrj04/edit?usp=sharing

Initial design mockups and wireframes can be found here: https://docs.google.com/document/d/1C0zAhYRit69CA4EO4RiTJMRqSDmnZcp-AgHGHgjxZPs/edit?usp=sharing

## Known issues

### Kit colour buttons may allow both teams to have the same colour in Settings

You can trigger this bug by being wilfully difficult and deliberately setting both Team 1 and Team 2 to have the same colour kit, then changing the colour for one of them to something else. If you then select another new colour, it should clear the error messages.

Fortunately, setting both teams to have the same kit colour in Settings won't carry over once you hit the Generate Teams button. Instead, the first team to choose that colour will take priority, and the remaining team kit colour will reset to its default. 

### Team name inputs don't clear upon focus

This is semi-intentional. Initially, I had the logic set to clear these onFocus as with the player name inputs, but it was causing complications with the default name, so I've put this aside to deal with another day. 

### Switching page on mobile sets your starting scroll position partway down the new page

If anyone knows a simple fix for this, please let me know! 

