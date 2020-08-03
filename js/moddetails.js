define(['jquery'], function() {
    return {
        magnifying: function() {
            class Scale {
                constructor() {
                    this.sf = $('#xf');
                    this.spic = $('.details-l-t');
                    this.bf = $('#bf');
                    this.bpic = $('#bigpic');
                }
                init() {
                    this.spic.hover(() => {
                        $('#xf,#bf').css('visibility', 'visible');
                        this.sf.width(this.bf.width() / this.bpic.width() * this.spic.width());
                        this.sf.height(this.bf.height() / this.bpic.height() * this.spic.height());
                        this.$bili = this.bpic.width() / this.spic.width();
                        this.spic.on('mousemove', (e) => {
                            let $left = e.pageX - this.spic.offset().left - this.sf.width() / 2;
                            let $top = e.pageY - this.spic.offset().top - this.sf.height() / 2;
                            if ($left <= 0) {
                                $left = 0;
                            } else if ($left >= this.spic.width() - this.sf.width()) {
                                $left = this.spic.width() - this.sf.width()
                            };
                            if ($top <= 0) {
                                $top = 0;
                            } else if ($top >= this.spic.height() - this.sf.height()) {
                                $top = $top = this.spic.height() - this.sf.height()
                            };
                            this.sf.css({
                                left: $left,
                                top: $top
                            });
                            this.bpic.css({
                                left: -this.$bili * $left,
                                top: -this.$bili * $top,
                            })
                        })
                    }, () => {
                        $('#xf,#bf').css('visibility', 'hidden');
                    });

                }
            }
            new Scale().init();
        }
    }
});