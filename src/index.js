/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, selectedLayer) {
    var byronQuotes = [
        'That artboard is looking a little Invision-y 😬',
        'That color? Really? 🤔',
        'I mean if you want to look that way, I can build it... 🤷🏻‍♂️',
        'I don\'t like it, but I don\'t know why 😳',
        'You, uh, build that in Photoshop? 😬',
        'Don\'t get me wrong, I like it, but it\'s just not \'there\' yet 😀',
        'First iteration? 😬'
    ];
    var randomNumber = Math.floor(Math.random()*byronQuotes.length);

    return {
        code: byronQuotes[randomNumber],
        language: "json"
      };
}

function screen(context, selectedVersion, selectedScreen) {

}

function component(context, selectedVersion, selectedComponent) {

}

function colors(context) {

}

function textStyles(context) {

}

function exportColors(context) {

}

function exportTextStyles(context) {

}

/**
 * The following functions will be deprecated. Your extensions can export them to support old versions of Zeplin's macOS app.
 * See Zeplin Extensions migration guide for details:
 * https://zpl.io/shared-styleguides-extensions-migration-guide
 */

function styleguideColors(context, colors) {

}

function styleguideTextStyles(context, textStyles) {

}

function exportStyleguideColors(context, colors) {

}

function exportStyleguideTextStyles(context, textStyles) {

}

function comment(context, text) {

}

export default {
    layer,
    screen,
    component,
    colors,
    textStyles,
    exportColors,
    exportTextStyles,
    styleguideColors,
    styleguideTextStyles,
    exportStyleguideColors,
    exportStyleguideTextStyles,
    comment
};
