var edge = require('edge'),
path = require('path');

var bridge = edge.func({
    source: function () {
        /*
        using NUnit.Core;
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Threading.Tasks;
        
        public class Startup
        {
            public async Task<object> Invoke(object dllPath)
            {
                var listener = new SimpleListener();
                var runner = new RemoteTestRunner();
                runner.Load(new TestPackage("tests", new[] { (string)dllPath }));
                runner.Run(listener, TestFilter.Empty, false, LoggingThreshold.Off);

                return new {
                  completed = listener.TestResults
                                      .Where(tr => tr.IsSuccess)
                                      .Select(tr => new {
                                        name = tr.Name,
                                        description = tr.Description,
                                        message = tr.Message,
                                        time = tr.Time
                                      }),
                  errors = listener.TestResults
                                   .Where(tr => !tr.IsSuccess)
                                   .Select(tr => new {
                                     name = tr.Name,
                                     description = tr.Description,
                                     message = tr.Message,
                                     time = tr.Time
                                   }),
                };
            }
        }

        public class SimpleListener : EventListener
        {
          public List<TestResult> TestResults { get; set; }

          public SimpleListener()
          {
            TestResults = new List<TestResult>();
          }

          public void TestFinished(TestResult result)
          {
            TestResults.Add(result);
          }

          public void RunFinished(Exception exception) { }
          public void RunFinished(TestResult result) { }
          public void RunStarted(string name, int testCount) { }
          public void SuiteFinished(TestResult result) { }
          public void SuiteStarted(TestName testName) { }
          public void TestOutput(TestOutput testOutput) { }
          public void TestStarted(TestName testName){ }
          public void UnhandledException(Exception exception) { }
        }
    */},
    references: [
    path.join(__dirname, "lib/nunit.core.dll"),
    path.join(__dirname, "lib/nunit.core.interfaces.dll"),
    path.join(__dirname, "lib/nunit.framework.dll")
    ]
});

module.exports = function() {
    return bridge;
};
