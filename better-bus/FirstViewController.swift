//
//  FirstViewController.swift
//  better-bus
//
//  Created by Sean Nakamura on 12/30/15.
//  Copyright (c) 2015 Sean Nakamura. All rights reserved.
//

import UIKit
import Alamofire

class FirstViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
    
    func helloWorld(name: String) -> String {
      let greeting = "Hello, " + name + "!"
      return greeting
    }
    
    print(helloWorld("Sean"))
    print(helloWorld("Tony"))
    print(helloWorld("Jesse"))
    print(helloWorld("Vic"))
    
    Alamofire.request(.GET,  "https://calm-everglades-9373.herokuapp.com/arrivals/stop/296", parameters: ["foo": "bar"])
      .responseJSON { response in
        print(response.result)
        
        if let JSON = response.result.value {
          print("JSON: \(JSON)")
        }
      }
  }
}