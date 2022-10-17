const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `d_ender_b`
    },
    async execute(interaction, client){
        
        const embed = new EmbedBuilder()
        .setTitle(`디 엔더`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxOTAxMTlfMTE4/MDAxNTQ3ODU3MDE2MDMw.G-3FygADAzKRODeURoPIGIBR7N5e57HmnZKvWrbo5VQg.Oos8crtDDC4NFLL-wZK-KdTwd1_2NSD2iEr1fS6ha9Yg.JPEG.darkprank/The20Ender.jpg?type=w740')
        .addFields([
            {
                name: `완제 드랍`,
                value: `\n\n레이드 : 데스 핀드`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('heartrender_b')
        .setLabel(`하트렌더`)
        .setStyle(ButtonStyle.Primary);
        const button1 = new ButtonBuilder()
        .setCustomId('astra_sword_of_moonlight')
        .setLabel(`월광의 검 아스트라`)
        .setStyle(ButtonStyle.Primary);
        const button2 = new ButtonBuilder()
        .setCustomId('calamity')
        .setLabel(`캘러미티`)
        .setStyle(ButtonStyle.Primary);
        const button3 = new ButtonBuilder()
        .setCustomId('divine_slayer')
        .setLabel(`디바인 슬레이어`)
        .setStyle(ButtonStyle.Primary);
        const button4 = new ButtonBuilder()
        .setCustomId('agnitus')
        .setLabel(`사자의 활 아그니투스`)
        .setStyle(ButtonStyle.Primary);
        
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button1,button2,button3,button4)],
            ephemeral: true
            
        });
    
    
    }
}