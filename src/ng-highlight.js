angular.module('ngHighlight', []).directive('highlight', [function () {
    return {
        restrict: 'A',
        scope: {
            'highlight': '='
        },
        link: function (scope, elem, attrs) {

            scope.$watch('highlight', function (newVal, oldVal) {

                if (newVal && (newVal !== oldVal)) {
                    var r = RegExp('(' + newVal + ')', 'gi');
                    var match = elem.text().match(r);

                    if (match) {
                        var node = elem.text().replace(r, '<span class="highlight">$1</span>');
                        elem.html(node);
                    } else {
                        elem.html('<span>' + elem.text() + '</span>');
                    }
                } else
                    elem.html('<span>' + elem.text() + '</span>');
            });
        }
    }
}]);